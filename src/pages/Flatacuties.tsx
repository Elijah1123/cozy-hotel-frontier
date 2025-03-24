
import { useEffect } from 'react';
import { toast } from 'sonner';

const Flatacuties = () => {
  // Run initialization on component mount
  useEffect(() => {
    initializeFlatacuties();
  }, []);

  const initializeFlatacuties = () => {
    // Get DOM elements
    const characterBar = document.getElementById('character-bar');
    const detailedInfo = document.getElementById('detailed-info');
    const newCharacterForm = document.getElementById('character-form');
    const votesForm = document.getElementById('votes-form');
    const resetButton = document.getElementById('reset-btn');
    
    let characters = [];
    let selectedCharacter = null;

    // Fetch all characters
    const fetchCharacters = async () => {
      try {
        const response = await fetch('http://localhost:3000/characters');
        if (!response.ok) throw new Error('Failed to fetch characters');
        characters = await response.json();
        renderCharacterBar();
      } catch (error) {
        console.error('Error fetching characters:', error);
        toast.error('Failed to load characters. Make sure json-server is running!');
      }
    };

    // Fetch a single character by ID
    const fetchCharacterById = async (id) => {
      try {
        const response = await fetch(`http://localhost:3000/characters/${id}`);
        if (!response.ok) throw new Error('Failed to fetch character details');
        selectedCharacter = await response.json();
        renderCharacterDetails();
      } catch (error) {
        console.error('Error fetching character details:', error);
        toast.error('Failed to load character details');
      }
    };

    // Render the character bar
    const renderCharacterBar = () => {
      if (!characterBar) return;
      characterBar.innerHTML = '';
      
      characters.forEach(character => {
        const span = document.createElement('span');
        span.textContent = character.name;
        span.className = "px-4 py-2 bg-primary text-primary-foreground rounded-md cursor-pointer hover:bg-accent transition-colors";
        span.addEventListener('click', () => fetchCharacterById(character.id));
        characterBar.appendChild(span);
      });
    };

    // Render character details
    const renderCharacterDetails = () => {
      if (!detailedInfo || !selectedCharacter) return;
      
      detailedInfo.innerHTML = `
        <h2 class="text-2xl font-display font-semibold mb-4 text-center">${selectedCharacter.name}</h2>
        <img 
          src="${selectedCharacter.image}" 
          alt="${selectedCharacter.name}"
          class="w-full h-64 object-cover rounded-md mb-4"
        />
        <p class="text-xl text-center mb-4">Votes: <span class="font-semibold">${selectedCharacter.votes}</span></p>
        
        <form id="votes-form" class="mb-4">
          <div class="flex gap-2">
            <input
              type="number"
              placeholder="Enter Votes"
              class="flex-1 h-10 rounded-md border border-input bg-background px-3 py-2"
              id="votes-input"
              min="1"
              required
            />
            <button 
              type="submit" 
              class="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
            >
              Add Votes
            </button>
          </div>
        </form>
        
        <button 
          id="reset-btn" 
          class="w-full bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90"
        >
          Reset Votes
        </button>
      `;
      
      // Reattach event listeners
      document.getElementById('votes-form').addEventListener('submit', handleVoteSubmit);
      document.getElementById('reset-btn').addEventListener('click', handleResetVotes);
    };

    // Handle vote submission
    const handleVoteSubmit = (e) => {
      e.preventDefault();
      if (!selectedCharacter) return;
      
      const votesInput = document.getElementById('votes-input');
      const voteCount = parseInt(votesInput.value);
      
      if (isNaN(voteCount) || voteCount < 1) {
        toast.error('Please enter a valid number of votes');
        return;
      }
      
      selectedCharacter.votes += voteCount;
      renderCharacterDetails();
      votesInput.value = '';
    };

    // Handle reset votes
    const handleResetVotes = () => {
      if (!selectedCharacter) return;
      selectedCharacter.votes = 0;
      renderCharacterDetails();
    };

    // Handle adding a new character
    const handleAddCharacter = (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('name');
      const imageInput = document.getElementById('image');
      
      if (!nameInput.value || !imageInput.value) {
        toast.error('Please provide both name and image URL');
        return;
      }
      
      const newCharacter = {
        id: characters.length + 1, // Simple ID generation for demo
        name: nameInput.value,
        image: imageInput.value,
        votes: 0
      };
      
      characters.push(newCharacter);
      selectedCharacter = newCharacter;
      
      renderCharacterBar();
      renderCharacterDetails();
      
      nameInput.value = '';
      imageInput.value = '';
    };

    // Attach event listeners
    if (newCharacterForm) {
      newCharacterForm.addEventListener('submit', handleAddCharacter);
    }
    
    // Initialize
    fetchCharacters();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-display font-bold text-center mb-8">Flatacuties</h1>
      <p className="text-center mb-8 text-muted-foreground">Click on a character to see more details and vote!</p>
      
      <div id="character-bar" className="flex flex-wrap justify-center gap-4 mb-8">
        {/* Character spans will be added here by JavaScript */}
      </div>

      <div id="detailed-info" className="max-w-md mx-auto bg-card p-6 rounded-lg shadow-md hidden">
        {/* Character details will be added here by JavaScript */}
      </div>

      <div className="max-w-md mx-auto mt-12 bg-card p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-display font-semibold mb-4">Add New Character</h3>
        <form id="character-form">
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
