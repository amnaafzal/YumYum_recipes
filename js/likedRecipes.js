let likedRecipesContainer=document.querySelector(".block")
console.log(likedRecipesContainer)

// function definition to show the likd recipe items  

function displayLikedRecipes() {
    let likedRecipes = JSON.parse(localStorage.getItem("likedRecipes")) || [];

    likedRecipes.forEach(meal => {
        let item = document.createElement("div");

        item.classList.add("item");

        item.innerHTML = `
            <img src="${meal.strMealThumb}" alt="" class="item_img">
            <div class="item_layout">
                <button class="like-btn"><i class="fas fa-heart"></i></button>
            </div>
            <div class="item_info">
                <h3>${meal.strMeal}</h3>
                <div class="star_rating">
                    <span class="fas fa-star"></span>
                    <span class="fas fa-star"></span>
                    <span class="fas fa-star"></span>
                    <span class="fas fa-star"></span>
                    <span class="fas fa-star"></span>
                </div>
            </div>`;

        // Append the item to your liked recipes container (e.g., likedRecipesContainer)
        likedRecipesContainer.appendChild(item);

// calling the function on clicking the title of item

        let recipe_heading=item.querySelector(".item_info h3")
      

        recipe_heading.addEventListener("click",()=>{
            let title=recipe_heading.textContent;
             openRecipe(title); // function call
        })

// removing the liked item on clicking on like icon again

        let likeBtn = item.querySelector(".like-btn");
  
            likeBtn.addEventListener("click", () => {
                let heart = likeBtn.querySelector("i")
                heart.classList.toggle("liked");
                
                removeItem(meal); // Remove the specific meal from liked recipes
            item.remove(); // Remove the item from the DOM
        
            })
    });
}


// function definition to remove the item 

function removeItem(meal) {
    // Get the existing liked recipes from localStorage
    let likedRecipes = JSON.parse(localStorage.getItem("likedRecipes")) || [];

    // Filter out the meal to be removed
    likedRecipes = likedRecipes.filter(likedMeal => likedMeal.idMeal !== meal.idMeal);

    // Save the updated liked recipes back to localStorage
    localStorage.setItem("likedRecipes", JSON.stringify(likedRecipes));
}


displayLikedRecipes(); // function calling to display liked items  


// redirecting to the next page on clicking the recipe name 

let openRecipe=(title)=>{
    if (title) {
        window.location.href = `openRecipe.html?title=${encodeURIComponent(title)}`;
    }

}

