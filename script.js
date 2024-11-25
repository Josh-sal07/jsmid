let currentEditIndex = null;

const addButton = document.getElementById('add-button');
const recipeList = document.getElementById('recipes');

addButton.addEventListener('click', () => {
    if (currentEditIndex !== null) {
        updateRecipe();
    } else {
        addRecipe();
    }
});

function addRecipe() {
    const recipeName = document.getElementById('recipe-name').value;
    const recipeDescription = document.getElementById('recipe-description').value;

    if (recipeName && recipeDescription) {
        const listItem = createRecipeElement(recipeName, recipeDescription);
        recipeList.appendChild(listItem);
        clearInputs();
    } else {
        alert("Please enter both name and description.");
    }
}

function createRecipeElement(name, description) {
    const listItem = document.createElement('li');
    listItem.className = 'recipe-item';

    listItem.innerHTML = `
        <div>
            <strong>${name}</strong><br>
            <p>${description}</p>
        </div>
        <div>
            <button onclick="editRecipe(this)">Edit</button>
            <button onclick="deleteRecipe(this)">Delete</button>
        </div>
    `;
    return listItem;
}

function updateRecipe() {
    const recipeName = document.getElementById('recipe-name').value;
    const recipeDescription = document.getElementById('recipe-description').value;

    const listItem = recipeList.children[currentEditIndex];
    listItem.innerHTML = `
        <div>
            <strong>${recipeName}</strong><br>
            <p>${recipeDescription}</p>
        </div>
        <div>
            <button onclick="editRecipe(this)">Edit</button>
            <button onclick="deleteRecipe(this)">Delete</button>
        </div>
    `;

    clearInputs();
    currentEditIndex = null;
    addButton.textContent = "Add Recipe"; 
}

function deleteRecipe(button) {
    const listItem = button.parentElement.parentElement;
    recipeList.removeChild(listItem);
}

function editRecipe(button) {
    const listItem = button.parentElement.parentElement;
    const recipeName = listItem.querySelector('strong').innerText;
    const recipeDescription = listItem.querySelector('p').innerText;

    document.getElementById('recipe-name').value = recipeName;
    document.getElementById('recipe-description').value = recipeDescription;

    currentEditIndex = Array.from(recipeList.children).indexOf(listItem);
    addButton.textContent = "Update Recipe"; 
}

function clearInputs() {
    document.getElementById('recipe-name').value = '';
    document.getElementById('recipe-description').value = '';
}
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
  }
  function logout() {
    alert("Logging out...");
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "index1.html";
}