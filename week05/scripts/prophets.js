const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthdate = document.createElement('p');
        let death = document.createElement('p');
        let birthplace = document.createElement('p');
        let length = document.createElement('p');
        let numofchildren = document.createElement('p');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        birthdate.textContent = `Birthdate: ${prophet.birthdate}`;
        death.textContent = `Death: ${prophet.death ? prophet.death : 'Still alive'}`;
        birthplace.textContent = `Birthplace: ${prophet.birthplace}`;
        length.textContent = `Length of Service: ${prophet.length} years`;
        numofchildren.textContent = `Number of Children: ${prophet.numofchildren}`;

        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(birthdate);
        card.appendChild(death);
        card.appendChild(birthplace);
        card.appendChild(length);
        card.appendChild(numofchildren);

        cards.appendChild(card);
    });
}

getProphetData();
