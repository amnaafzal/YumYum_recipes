document.addEventListener('DOMContentLoaded', function() {
    // Get the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

    if (query) {
        document.title = `Search Results for "${query}" - YumYum Recipes`;
        findRecipes(query);
    }
});


let hamburge=document.querySelector(".hamburger")
let menubar=document.querySelector(".menubar")
hamburge.addEventListener("click",()=>{
    menubar.classList.toggle("showMenu")
})


let recipe_block=document.querySelector(".block")
let title=document.querySelector(".meal_box h1")

let findRecipes=async(query)=>{

    let response=await fetch(`https://themealdb.com/api/json/v1/1/filter.php?a=${query}`)
    let data=await response.json();
    console.log(data)

    title.textContent=query+" cuisine";

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


       recipe_block.appendChild(item)

       let recipe_heading=item.querySelector(".item_info h3")
      

       recipe_heading.addEventListener("click",()=>{
           let title=recipe_heading.textContent;
           openRecipe(title);
       })

        let likeBtn = item.querySelector(".like-btn");

        likeItem(likeBtn,meal)

})
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
            window.location.href = `\html\openRecipe.html?title=${encodeURIComponent(title)}`;
        }
    
    }
    