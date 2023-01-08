"use strict"

window.onload = () => {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    }
    const callback = (entries, observer) => {
        if (!entries.some(elem => elem.isIntersecting)) return

        entries.forEach(elem => {
            if (!elem.isIntersecting) return
            Array.from(elem.target.querySelectorAll("[class~='hidden']")).forEach((child) => { child.classList.remove("hidden") })
            observer.unobserve(elem.target)
        })
    }

    const observer = new IntersectionObserver(callback, options)

    let sections = Array.from(document.querySelectorAll("section"))
    sections.forEach(section => observer.observe(section))
}

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