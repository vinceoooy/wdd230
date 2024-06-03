const baseURL = "https://vinceoooy.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(data) {
    const weeks = data.weeks;
    const listContainer = document.querySelector('.card ul');
    listContainer.innerHTML = ''; // Clear any existing content

    weeks.forEach(week => {
        const weekItem = document.createElement('li');
        weekItem.innerHTML = `${week.week}: `;

        week.links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.title;

            weekItem.appendChild(linkElement);
            weekItem.appendChild(document.createTextNode(' | ')); // Add separator
        });

        // Remove the trailing separator
        if (weekItem.lastChild) {
            weekItem.removeChild(weekItem.lastChild);
        }

        listContainer.appendChild(weekItem);
    });
}

getLinks();
