
import { useEffect, useState } from 'react';
import CharacterBar from '../components/flatacuties/CharacterBar';
import CharacterDetail from '../components/flatacuties/CharacterDetail';
import AddCharacterForm from '../components/flatacuties/AddCharacterForm';
import { Character, fetchCharacters, fetchCharacterById } from '../services/flatacutiesService';

const Flatacuties = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  // Run initialization on component mount
  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    const data = await fetchCharacters();
    setCharacters(data);
  };

  const handleCharacterSelect = async (id: number) => {
    const character = await fetchCharacterById(id);
    if (character) {
      setSelectedCharacter(character);
    }
  };

  const handleVoteUpdate = (updatedCharacter: Character) => {
    setSelectedCharacter(updatedCharacter);
    
    // Update the character in the characters array as well
    setCharacters(characters.map(char => 
      char.id === updatedCharacter.id ? updatedCharacter : char
    ));
  };

  const handleAddCharacter = (newCharacter: Character) => {
    setCharacters([...characters, newCharacter]);
    setSelectedCharacter(newCharacter);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-display font-bold text-center mb-8">Flatacuties</h1>
      <p className="text-center mb-8 text-muted-foreground">Click on a character to see more details and vote!</p>
      
      <CharacterBar 
        characters={characters} 
        onCharacterSelect={handleCharacterSelect} 
      />

      {selectedCharacter && (
        <CharacterDetail 
          character={selectedCharacter} 
          onVoteUpdate={handleVoteUpdate} 
        />
      )}

      <AddCharacterForm 
        onAddCharacter={handleAddCharacter} 
        charactersCount={characters.length} 
      />
    </div>
  );
};

export default Flatacuties;
