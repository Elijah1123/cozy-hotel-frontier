
import { useState } from 'react';

interface Character {
  id: number;
  name: string;
  image: string;
  votes: number;
}

interface CharacterBarProps {
  characters: Character[];
  onCharacterSelect: (id: number) => void;
}

const CharacterBar = ({ characters, onCharacterSelect }: CharacterBarProps) => {
  return (
    <div id="character-bar" className="flex flex-wrap justify-center gap-4 mb-8">
      {characters.map((character) => (
        <span
          key={character.id}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md cursor-pointer hover:bg-accent transition-colors"
          onClick={() => onCharacterSelect(character.id)}
        >
          {character.name}
        </span>
      ))}
    </div>
  );
};

export default CharacterBar;
