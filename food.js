



function renderRecipes() {
    const recipesSection = document.getElementById("recipes");
    recipesSection.innerHTML = "";

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe");
        const recipeName = document.createElement("h2");
        recipeName.textContent = recipe.name;
        recipeDiv.appendChild(recipeName);
        
        const ingredientsList = document.createElement("ul");
        recipe.ingredients.forEach(ingredient => {
            const listItem = document.createElement("li");
            listItem.textContent = ingredient;
            ingredientsList.appendChild(listItem);
        });
        recipeDiv.appendChild(ingredientsList);

        recipesSection.appendChild(recipeDiv);
    });
}

document.addEventListener("DOMContentLoaded", renderRecipes);
