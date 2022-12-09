"use strict"
function dropdown(event) {
    if(document.body.clientWidth < 640) {
        let block = event.currentTarget.querySelector(".countries__block") 
        let header = event.currentTarget.querySelector("header")
        
        if(block.getAttribute("class").includes("active")) {
            block.classList.remove("active")
            header.classList.remove("arrowUp")
        } else {
            block.classList.add("active")
            header.classList.add("arrowUp")
        }
    }
}

function showMenu() {
    let menu = document.querySelector(".navbar__menu") ?? document.querySelector(".navbar__menu active")
    menu.getAttribute("class").includes("active") ? menu.classList.remove("active") : menu.classList.add("active")
}

document.querySelectorAll(".countries__container").forEach(item => item.addEventListener("click", (event) => dropdown(event)))
document.querySelector(".navbar__menu-button").addEventListener("click", () => showMenu())
document.querySelectorAll(".navbar__menu").forEach(item => item.addEventListener("click", () => showMenu() ))