document.addEventListener('DOMContentLoaded', function() {
    // Get the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

    if (query) {
        document.title = `Search Results for "${query}" - YumYum Recipes`;
        fetchRecipes(query);
    }
});


let menubar=document.querySelector(".menubar")
let hamburgerIcon=document.querySelector(".hamburger")

let container=document.querySelector(".container")




let fetchRecipes=async(query)=>{
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)

    data= await response.json()
    console.log(data)
    data.meals.forEach(meal => {
        let item = document.createElement("div")

        item.classList.add("item")

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
                        </div>`


                        container.appendChild(item)

        let recipe_heading=item.querySelector(".item_info h3")
      

        recipe_heading.addEventListener("click",()=>{
            let title=recipe_heading.textContent;
            openRecipe(title);
        })
       
        let likeBtn = item.querySelector(".like-btn");

        likeItem(likeBtn,meal)

    });
    

}

let likeItem = (likeBtn,meal) => {
    likeBtn.addEventListener("click", () => {
        let heart = likeBtn.querySelector("i")
        heart.classList.toggle("liked");
        
        let likedRecipes=JSON.parse(localStorage.getItem("likedRecipes"))||[];

        let IsAlreadyLiked=likedRecipes.some(LikedMeal=>LikedMeal.idMeal===meal.idMeal)

        if (!IsAlreadyLiked) {
            // Add the new liked recipe
            likedRecipes.push(meal);
    
            // Save the updated liked recipes back to localStorage
            localStorage.setItem("likedRecipes", JSON.stringify(likedRecipes));
        }
        
    })

}


let openRecipe=(title)=>{
    if (title) {
        window.location.href = `openRecipe.html?title=${encodeURIComponent(title)}`;
    }

}


hamburgerIcon.addEventListener("click",()=>{
    menubar.classList.toggle("dropdown-menu")
})

