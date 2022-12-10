"use strict"
function dropdown(event) {
    if (document.body.clientWidth < 640) {
        event.currentTarget.querySelector(".countries__block").classList.toggle("active")
        event.currentTarget.querySelector("header").classList.toggle("arrowUp")
    }
}

function showMenu() {
    document.querySelector(".navbar__menu").classList.toggle("active")
}

document.querySelectorAll(".countries__container").forEach(item => item.addEventListener("click", (event) => dropdown(event)))
document.querySelector(".navbar__menu-button").addEventListener("click", () => showMenu())
document.querySelectorAll(".navbar__menu").forEach(item => item.addEventListener("click", () => showMenu()))