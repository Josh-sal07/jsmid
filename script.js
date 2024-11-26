// Function to toggle sidebar visibility
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}

// Function for logging out
function logout() {
    alert("Logging out...");
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "index1.html";  // Assuming "index1.html" is your login page
}

let recipes = []; // Array to hold recipes

// Render the recipes list dynamically
function renderRecipes() {
    const recipeList = document.getElementById("recipes");
    recipeList.innerHTML = ""; // Clear previous list

    recipes.forEach((recipe, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${recipe.name}</strong>: ${recipe.description}
            <button onclick="editRecipe(${index})">Edit</button>
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipeList.appendChild(listItem);
    });
}

// Add a new recipe
document.getElementById("add-button").addEventListener("click", function () {
    const recipeName = document.getElementById("recipe-name").value;
    const recipeDescription = document.getElementById("recipe-description").value;

    if (recipeName && recipeDescription) {
        recipes.push({ name: recipeName, description: recipeDescription });
        renderRecipes(); // Re-render the recipes
        document.getElementById("recipe-name").value = "";
        document.getElementById("recipe-description").value = "";
    } else {
        alert("Please fill in both the recipe name and description.");
    }
});

// Edit an existing recipe
function editRecipe(index) {
    const recipe = recipes[index];
    const newName = prompt("Edit Recipe Name:", recipe.name);
    const newDescription = prompt("Edit Recipe Description:", recipe.description);

    if (newName && newDescription) {
        recipes[index] = { name: newName, description: newDescription };
        renderRecipes();
    } else {
        alert("Please enter both a name and description.");
    }
}

// Delete a recipe
function deleteRecipe(index) {
    recipes.splice(index, 1);
    renderRecipes();
}

// Clear all recipes
document.getElementById("clear-button").addEventListener("click", function () {
    if (confirm("Are you sure you want to clear all recipes?")) {
        recipes = [];
        renderRecipes();
    }
});

// Initial render of the recipes
renderRecipes();
function updateWelcomeMessage() {
    // Retrieve the logged-in user's username from sessionStorage
    const loggedInUser = sessionStorage.getItem("loggedInUser");

    // Debugging: Check if the username is being retrieved
    console.log("Logged in user:", loggedInUser);

    // If a user is logged in, update the welcome message
    if (loggedInUser) {
      const welcomeHeader = document.querySelector("h1");
      if (welcomeHeader) {
        welcomeHeader.textContent = `Welcome to Recipe Sharing Web, ${loggedInUser}!`;
      }
    }
  }

  // Call the function when the page finishes loading
  document.addEventListener("DOMContentLoaded", updateWelcomeMessage);