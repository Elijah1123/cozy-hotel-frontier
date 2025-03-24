
import { toast } from 'sonner';

interface Character {
  id: number;
  name: string;
  image: string;
  votes: number;
}

interface AddCharacterFormProps {
  onAddCharacter: (character: Character) => void;
  charactersCount: number;
}

const AddCharacterForm = ({ onAddCharacter, charactersCount }: AddCharacterFormProps) => {
  const handleAddCharacter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const nameInput = e.currentTarget.elements.namedItem('name') as HTMLInputElement;
    const imageInput = e.currentTarget.elements.namedItem('image') as HTMLInputElement;
    
    if (!nameInput?.value || !imageInput?.value) {
      toast.error('Please provide both name and image URL');
      return;
    }
    
    const newCharacter: Character = {
      id: charactersCount + 1, // Simple ID generation for demo
      name: nameInput.value,
      image: imageInput.value,
      votes: 0
    };
    
    onAddCharacter(newCharacter);
    
    nameInput.value = '';
    imageInput.value = '';
  };

  return (
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
  );
};

export default AddCharacterForm;
