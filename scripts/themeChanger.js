const modeButton = document.querySelector("#mode");
const moon = document.querySelector("#darkBtn");
const sun = document.querySelector("#lightBtn");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
    if (moon.style.display === "none") {
        // If moon image is hidden, show moon and hide sun
        moon.style.display = "inline";
        sun.style.display = "none";
        body.style.background = "#eee";
        body.style.color = "#000";
    } else {
        // If sun image is hidden, show sun and hide moon
        moon.style.display = "none";
        sun.style.display = "inline";
        body.style.background = "#000";
        body.style.color = "#fff";
    }
});