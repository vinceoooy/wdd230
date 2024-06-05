const visitCounter = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-localStorage")) || 0;
let timeBeforeVisit = Number(window.localStorage.getItem("timeBeforeVisit-localStorage"));
let currentVisitTime = Date.now();

if (numVisits !== 0 && (currentVisitTime - timeBeforeVisit) / 86400000 > 24) {
    visitCounter.textContent = `.(Your last visit was ${Math.floor((currentVisitTime - timeBeforeVisit) / 86400000)} days ago)`;
} else if ((currentVisitTime - timeBeforeVisit) / 86400000 < 24) {
    visitCounter.textContent = "-------(Back so soon? Awesome!)";
} else {
    visitCounter.textContent = "(Welcome to my website. I see this is your first time)";
}

numVisits++;
timeBeforeVisit = currentVisitTime;

localStorage.setItem("numVisits-localStorage", numVisits);
localStorage.setItem("timeBeforeVisit-localStorage", timeBeforeVisit);

// Set a timeout to hide the visit message after 3 seconds
setTimeout(() => {
    visitCounter.style.display = 'none';
}, 3000);
