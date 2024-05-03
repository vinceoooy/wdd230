const modeButton = document.querySelector("#mode");
const moon = document.querySelector(".darkBtn");
const sun = document.querySelector(".lightBtn");
const body = document.querySelector("body");
const header = document.querySelector("header");
const profilPicture = document.querySelector("#profil-picture");
const nav = document.querySelector("nav");
const card = document.querySelectorAll(".card");
const h1 = document.querySelectorAll("h1");
const active = document.querySelector(".active");
const cardULAV = document.querySelectorAll(".card ul li a:visited");
const cardULA = document.querySelectorAll(".card ul li a");
const h2 = document.querySelectorAll("h2");
const menu = document.querySelectorAll("#menu");
const footer = document.querySelector("footer");



modeButton.addEventListener("click", () => {
    const moonDisplay = window.getComputedStyle(moon).getPropertyValue('display');
    const sunDisplay = window.getComputedStyle(sun).getPropertyValue('display');
    moon.style.display = moonDisplay === "none" ? "inline" : "none";
    sun.style.display = sunDisplay === "none" ? "inline" : "none";

    body.classList.toggle("dark");
    header.classList.toggle("dark");
    profilPicture.classList.toggle("dark");
    nav.classList.toggle("dark");
    active.classList.toggle("dark");
    card.forEach(element => {
        element.classList.toggle("dark");
    });
    h1.forEach(element => {
        element.classList.toggle("dark");
    });
    cardULAV.forEach(element => {
        element.classList.toggle("dark");
    });
    cardULA.forEach(element => {
        element.classList.toggle("dark");
    });
    h2.forEach(element => {
        element.classList.toggle("dark");
    });
    menu.forEach(element => {
        element.classList.toggle("dark");
    });
    footer.classList.toggle("dark");
});
