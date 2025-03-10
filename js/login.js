

let hamburge=document.querySelector(".hamburger")
let menubar=document.querySelector(".menubar")
hamburge.addEventListener("click",()=>{
    menubar.classList.toggle("showMenu")
})


let getLoginForm=document.querySelectorAll(".toggle-btn")
let toggle=document.querySelector(".toggle")
let login_form=document.querySelector(".login_form")
console.log(getLoginForm)

getLoginForm.forEach(btn =>{
    btn.addEventListener("click",()=>{

        toggle.classList.toggle("toggle_left")
        login_form.classList.toggle("login_toggle")
        // login_form.classList.toggle("login_toggle")
    })
})

let mediumScreenBtn=document.querySelectorAll(".hidden-toggle-btn")
let signUpForm=document.querySelector(".signUp_form")
let loginForm=document.querySelector(".login_form")
mediumScreenBtn.forEach(btn=>{
    btn.addEventListener("click",()=>{
        signUpForm.classList.toggle("hide_signup")
        loginForm.classList.toggle("show_login")

    })
})