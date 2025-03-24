
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

interface Character {
  id: number;
  name: string;
  image: string;
  votes: number;
}

const Flatacuties = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [voteCount, setVoteCount] = useState<string>('');

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await fetch('http://localhost:3000/characters');
      if (!response.ok) throw new Error('Failed to fetch characters');
      const data = await response.json();
      setCharacters(data);
    } catch (error) {
      console.error('Error fetching characters:', error);
      toast.error('Failed to load characters. Make sure json-server is running!');
    }
  };

  const fetchCharacterById = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/characters/${id}`);
      if (!response.ok) throw new Error('Failed to fetch character details');
      const character = await response.json();
      setSelectedCharacter(character);
    } catch (error) {
      console.error('Error fetching character details:', error);
      toast.error('Failed to load character details');
    }
  };

  const handleCharacterClick = (id: number) => {
    fetchCharacterById(id);
  };

  const handleVoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCharacter) return;
    
    const newVotes = selectedCharacter.votes + Number(voteCount);
    setSelectedCharacter({
      ...selectedCharacter,
      votes: newVotes
    });
    setVoteCount('');
  };

  const handleResetVotes = () => {
    if (!selectedCharacter) return;
    setSelectedCharacter({
      ...selectedCharacter,
      votes: 0
    });
  };

  const handleAddCharacter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const imageInput = form.elements.namedItem('image') as HTMLInputElement;
    
    if (!nameInput.value || !imageInput.value) {
      toast.error('Please provide both name and image URL');
      return;
    }

    const newCharacter: Character = {
      id: characters.length + 1, // Simple ID generation for demo
      name: nameInput.value,
      image: imageInput.value,
      votes: 0
    };

    setCharacters([...characters, newCharacter]);
    setSelectedCharacter(newCharacter);
    
    form.reset();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-display font-bold text-center mb-8">Flatacuties</h1>
      <p className="text-center mb-8 text-muted-foreground">Click on a character to see more details and vote!</p>
      
      <div id="character-bar" className="flex flex-wrap justify-center gap-4 mb-8">
        {characters.map((character) => (
          <span
            key={character.id}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md cursor-pointer hover:bg-accent transition-colors"
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
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
              >
                Add Votes
              </button>
            </div>
          </form>
          
          <button 
            id="reset-btn" 
            className="w-full bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90"
            onClick={handleResetVotes}
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
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-accent text-accent-foreground px-4 py-2 rounded-md hover:bg-accent/90"
            >
              Add Character
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Flatacuties;
