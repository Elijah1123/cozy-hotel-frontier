
import { toast } from 'sonner';

export interface Character {
  id: number;
  name: string;
  image: string;
  votes: number;
}

// Fetch all characters
export const fetchCharacters = async (): Promise<Character[]> => {
  try {
    const response = await fetch('http://localhost:3000/characters');
    if (!response.ok) throw new Error('Failed to fetch characters');
    return await response.json();
  } catch (error) {
    console.error('Error fetching characters:', error);
    toast.error('Failed to load characters. Make sure json-server is running!');
    return [];
  }
};

// Fetch a single character by ID
export const fetchCharacterById = async (id: number): Promise<Character | null> => {
  try {
    const response = await fetch(`http://localhost:3000/characters/${id}`);
    if (!response.ok) throw new Error('Failed to fetch character details');
    return await response.json();
  } catch (error) {
    console.error('Error fetching character details:', error);
    toast.error('Failed to load character details');
    return null;
  }
};
