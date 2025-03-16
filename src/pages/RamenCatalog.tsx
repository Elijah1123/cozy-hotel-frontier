
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const RamenCatalog = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      // Define the ramens array
      const ramens = [
        { name: "Shoyu Ramen", restaurant: "Ramen Tatsu-ya", image: "/shoyu.jpg", rating: 5, comment: "Delicious!" },
        { name: "Miso Ramen", restaurant: "Ichiran", image: "/miso.jpg", rating: 4, comment: "Rich broth!" },
        { name: "Tonkotsu Ramen", restaurant: "Ippudo", image: "/tonkotsu.jpg", rating: 5, comment: "Creamy and flavorful!" }
      ];

      // Display ramens function
      function displayRamens() {
        const ramenMenu = document.getElementById("ramen-menu");
        if (!ramenMenu) return;
        
        ramenMenu.innerHTML = ""; // Clear existing elements
        
        ramens.forEach((ramen) => {
          const img = document.createElement("img");
          img.src = ramen.image;
          img.alt = ramen.name;
          img.className = "w-32 h-32 object-cover rounded-md cursor-pointer m-2";
          img.addEventListener("click", () => handleClick(ramen));
          ramenMenu.appendChild(img);
        });
      }

      // Handle click function
      function handleClick(ramen) {
        const detailDiv = document.getElementById("ramen-detail");
        if (!detailDiv) return;
        
        detailDiv.innerHTML = `
          <h2 class="text-2xl font-bold">${ramen.name}</h2>
          <h3 class="text-xl text-gray-600">${ramen.restaurant}</h3>
          <img src="${ramen.image}" alt="${ramen.name}" class="w-64 h-auto object-cover rounded-md my-4" />
          <p class="text-lg">Rating: ${ramen.rating}/5</p>
          <p class="text-lg">Comment: ${ramen.comment}</p>
        `;
      }

      // Add submit listener
      function addSubmitListener() {
        const form = document.getElementById("new-ramen");
        if (!form) return;
        
        form.addEventListener("submit", (event) => {
          event.preventDefault();
          
          const formElement = event.target as HTMLFormElement;
          const nameInput = formElement.querySelector('input[name="name"]') as HTMLInputElement;
          const restaurantInput = formElement.querySelector('input[name="restaurant"]') as HTMLInputElement;
          const imageInput = formElement.querySelector('input[name="image"]') as HTMLInputElement;
          const ratingInput = formElement.querySelector('input[name="rating"]') as HTMLInputElement;
          const commentInput = formElement.querySelector('textarea[name="comment"]') as HTMLTextAreaElement;
          
          const name = nameInput.value;
          const restaurant = restaurantInput.value;
          const image = imageInput.value;
          const rating = parseInt(ratingInput.value);
          const comment = commentInput.value;
          
          const newRamen = { name, restaurant, image, rating, comment };
          ramens.push(newRamen);
          
          const img = document.createElement("img");
          img.src = image;
          img.alt = name;
          img.className = "w-32 h-32 object-cover rounded-md cursor-pointer m-2";
          img.addEventListener("click", () => handleClick(newRamen));
          
          const ramenMenu = document.getElementById("ramen-menu");
          if (ramenMenu) {
            ramenMenu.appendChild(img);
          }
          
          formElement.reset();
        });
      }

      // Main function
      function main() {
        displayRamens();
        addSubmitListener();
      }

      // Run main after DOM content is loaded
      main();
      initialized.current = true;
    }
  }, []);

  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <Button asChild variant="outline" className="mb-4">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-bold mb-2">Ramen Catalog</h1>
          <p className="text-muted-foreground">Browse our selection of ramen or add your own!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Ramen Menu</h2>
            <div id="ramen-menu" className="flex flex-wrap gap-2 border p-4 rounded-md min-h-[200px]"></div>
            
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Add New Ramen</h2>
              <form id="new-ramen" className="space-y-4 border p-4 rounded-md">
                <div>
                  <label className="block text-sm font-medium mb-1">Name:</label>
                  <input type="text" name="name" required className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Restaurant:</label>
                  <input type="text" name="restaurant" required className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Image URL:</label>
                  <input type="text" name="image" required className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Rating (1-5):</label>
                  <input type="number" name="rating" min="1" max="5" required className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Comment:</label>
                  <textarea name="comment" className="w-full p-2 border rounded-md"></textarea>
                </div>
                <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                  Add Ramen
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Ramen Details</h2>
            <div id="ramen-detail" className="border p-4 rounded-md min-h-[400px]">
              <p className="text-muted-foreground">Select a ramen to view details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RamenCatalog;
