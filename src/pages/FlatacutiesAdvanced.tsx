
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

interface Character {
  id: number;
  name: string;
  image: string;
  votes: number;
}

const FlatacutiesAdvanced = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [voteCount, setVoteCount] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3000/characters');
      if (!response.ok) throw new Error('Failed to fetch characters');
      const data = await response.json();
      setCharacters(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching characters:', error);
      toast.error('Failed to load characters. Make sure json-server is running!');
      setIsLoading(false);
    }
  };

  const fetchCharacterById = async (id: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/characters/${id}`);
      if (!response.ok) throw new Error('Failed to fetch character details');
      const character = await response.json();
      setSelectedCharacter(character);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching character details:', error);
      toast.error('Failed to load character details');
      setIsLoading(false);
    }
  };

  const handleCharacterClick = (id: number) => {
    fetchCharacterById(id);
  };

  const handleVoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCharacter) return;
    
    const newVotes = selectedCharacter.votes + Number(voteCount);
    
    setIsLoading(true);
    try {
      // Update votes on the server
      const response = await fetch(`http://localhost:3000/characters/${selectedCharacter.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ votes: newVotes }),
      });
      
      if (!response.ok) throw new Error('Failed to update votes');
      
      const updatedCharacter = await response.json();
      setSelectedCharacter(updatedCharacter);
      
      // Update character in the list
      setCharacters(characters.map(char => 
        char.id === selectedCharacter.id ? updatedCharacter : char
      ));
      
      setVoteCount('');
      toast.success('Votes updated successfully!');
    } catch (error) {
      console.error('Error updating votes:', error);
      toast.error('Failed to update votes');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetVotes = async () => {
    if (!selectedCharacter) return;
    
    setIsLoading(true);
    try {
      // Reset votes on the server
      const response = await fetch(`http://localhost:3000/characters/${selectedCharacter.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ votes: 0 }),
      });
      
      if (!response.ok) throw new Error('Failed to reset votes');
      
      const updatedCharacter = await response.json();
      setSelectedCharacter(updatedCharacter);
      
      // Update character in the list
      setCharacters(characters.map(char => 
        char.id === selectedCharacter.id ? updatedCharacter : char
      ));
      
      toast.success('Votes reset successfully!');
    } catch (error) {
      console.error('Error resetting votes:', error);
      toast.error('Failed to reset votes');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddCharacter = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const imageInput = form.elements.namedItem('image') as HTMLInputElement;
    
    if (!nameInput.value || !imageInput.value) {
      toast.error('Please provide both name and image URL');
      return;
    }

    const newCharacter = {
      name: nameInput.value,
      image: imageInput.value,
      votes: 0
    };
    
    setIsLoading(true);
    try {
      // Add new character to the server
      const response = await fetch('http://localhost:3000/characters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCharacter),
      });
      
      if (!response.ok) throw new Error('Failed to add character');
      
      const savedCharacter = await response.json();
      
      // Update local state with the new character
      setCharacters([...characters, savedCharacter]);
      setSelectedCharacter(savedCharacter);
      
      form.reset();
      toast.success('Character added successfully!');
    } catch (error) {
      console.error('Error adding character:', error);
      toast.error('Failed to add character');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-display font-bold text-center mb-8">Flatacuties Advanced</h1>
      <p className="text-center mb-8 text-muted-foreground">
        This version includes server persistence (requires json-server running)
      </p>
      
      {isLoading && (
        <div className="fixed inset-0 bg-background/80 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}
      
      <div id="character-bar" className="flex flex-wrap justify-center gap-4 mb-8">
        {characters.map((character) => (
          <span
            key={character.id}
            className={`px-4 py-2 rounded-md cursor-pointer transition-colors ${
              selectedCharacter?.id === character.id 
                ? 'bg-accent text-accent-foreground' 
                : 'bg-primary text-primary-foreground hover:bg-primary/90'
            }`}
            onClick={() => handleCharacterClick(character.id)}
          >
            {character.name}
          </span>
        ))}
      </div>

      {selectedCharacter && (
        <div id="detailed-info" className="max-w-md mx-auto bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-display font-semibold mb-4 text-center">{selectedCharacter.name}</h2>
          <img 
            src={selectedCharacter.image} 
            alt={selectedCharacter.name}
            className="w-full h-64 object-cover rounded-md mb-4"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
            }}
          />
          <p className="text-xl text-center mb-4">Votes: <span className="font-semibold">{selectedCharacter.votes}</span></p>
          
          <form id="votes-form" onSubmit={handleVoteSubmit} className="mb-4">
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Enter Votes"
                className="flex-1 h-10 rounded-md border border-input bg-background px-3 py-2"
                value={voteCount}
                onChange={(e) => setVoteCount(e.target.value)}
                min="1"
                required
              />
              <button 
                type="submit" 
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 disabled:opacity-50"
                disabled={isLoading}
              >
                Add Votes
              </button>
            </div>
          </form>
          
          <button 
            id="reset-btn" 
            className="w-full bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90 disabled:opacity-50"
            onClick={handleResetVotes}
            disabled={isLoading || selectedCharacter.votes === 0}
          >
            Reset Votes
          </button>
        </div>
      )}

      <div className="max-w-md mx-auto mt-12 bg-card p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-display font-semibold mb-4">Add New Character</h3>
        <form id="character-form" onSubmit={handleAddCharacter}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Character name"
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium mb-1">Image URL</label>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="Image URL"
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                required
                disabled={isLoading}
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-accent text-accent-foreground px-4 py-2 rounded-md hover:bg-accent/90 disabled:opacity-50"
              disabled={isLoading}
            >
              Add Character
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlatacutiesAdvanced;
