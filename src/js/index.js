"use strict"

document.querySelectorAll(".countries__container").forEach(item => item.addEventListener("click", (event) => dropdown(event)))

function dropdown(event) {
    if(window.screen.width < 640) {
        let block = event.currentTarget.querySelector(".countries__block") ?? event.currentTarget.querySelector(".countries__block active")
        if(block.getAttribute("class").includes("active")) {
            block.setAttribute("class", "countries__block")
        } else {
            block.setAttribute("class", "countries__block active")
        }
    }
}

document.querySelector(".navbar__menu-button").addEventListener("click", () => showMenu())

function showMenu() {
    let menu = document.querySelector(".navbar__menu") ?? document.querySelector(".navbar__menu active")
    menu.getAttribute("class").includes("active") ? menu.setAttribute("class", "navbar__menu") : menu.setAttribute("class", "navbar__menu active")
}

document.querySelectorAll(".navbar__menu").forEach(item => item.addEventListener("click", () => showMenu() ))