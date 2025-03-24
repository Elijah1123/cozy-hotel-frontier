
import { useState } from 'react';
import { toast } from 'sonner';

interface Character {
  id: number;
  name: string;
  image: string;
  votes: number;
}

interface CharacterDetailProps {
  character: Character;
  onVoteUpdate: (updatedCharacter: Character) => void;
}

const CharacterDetail = ({ character, onVoteUpdate }: CharacterDetailProps) => {
  const [voteCount, setVoteCount] = useState<string>('');

  const handleVoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const votes = parseInt(voteCount);
    if (isNaN(votes) || votes < 1) {
      toast.error('Please enter a valid number of votes');
      return;
    }
    
    const updatedCharacter = {
      ...character,
      votes: character.votes + votes
    };
    
    onVoteUpdate(updatedCharacter);
    setVoteCount('');
  };

  const handleResetVotes = () => {
    const updatedCharacter = {
      ...character,
      votes: 0
    };
    onVoteUpdate(updatedCharacter);
  };

  return (
    <div id="detailed-info" className="max-w-md mx-auto bg-card p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-display font-semibold mb-4 text-center">{character.name}</h2>
      <img 
        src={character.image} 
        alt={character.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <p className="text-xl text-center mb-4">Votes: <span className="font-semibold">{character.votes}</span></p>
      
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
  );
};

export default CharacterDetail;
