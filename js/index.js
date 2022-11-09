"use strict"
function dropdown(event) {
    if(document.body.clientWidth < 640) {
        let block = event.currentTarget.querySelector(".countries__block") ?? event.currentTarget.querySelector(".countries__block active")
        let header = event.currentTarget.querySelector("header")
        
        if(block.getAttribute("class").includes("active")) {
            block.setAttribute("class", "countries__block")
            header.setAttribute("class", "")
        } else {
            block.setAttribute("class", "countries__block active")
            header.setAttribute("class", "arrowUp")
        }
    }
}

function showMenu() {
    let menu = document.querySelector(".navbar__menu") ?? document.querySelector(".navbar__menu active")
    menu.getAttribute("class").includes("active") ? menu.setAttribute("class", "navbar__menu") : menu.setAttribute("class", "navbar__menu active")
}

document.querySelectorAll(".countries__container").forEach(item => item.addEventListener("click", (event) => dropdown(event)))
document.querySelector(".navbar__menu-button").addEventListener("click", () => showMenu())
document.querySelectorAll(".navbar__menu").forEach(item => item.addEventListener("click", () => showMenu() ))