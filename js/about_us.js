let hamburge=document.querySelector(".hamburger")
let menubar=document.querySelector(".menubar")
hamburge.addEventListener("click",()=>{
    menubar.classList.toggle("showMenu")
})



let wrapper=document.querySelector(".wrapper");
let indicators=[...document.querySelectorAll(".indicators button")]



let currentIndicator=0;

indicators.forEach((item, index)=>{
    console.log(index)

    item.addEventListener("click",()=>{

        indicators[currentIndicator].classList.remove("active");
        item.classList.add("active")

        wrapper.style.marginLeft=`-${100*index}%`;
        console.log(wrapper.clientWidth)
        currentIndicator=index;



    })
})