document.addEventListener('DOMContentLoaded', () => {
    const spotlightContainer = document.querySelector('.spotlights');

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const qualifiedMembers = data.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
            displaySpotlights(qualifiedMembers);
        });

    function displaySpotlights(members) {
        // Shuffle the members array to get a random selection
        const shuffledMembers = members.sort(() => 0.5 - Math.random());
        // Select the first 2 or 3 members
        const selectedMembers = shuffledMembers.slice(0, 3);

        const spotlightContainerInner = document.createElement('div');
        spotlightContainerInner.classList.add('spotlight-container');

        selectedMembers.forEach(member => {
            const section = document.createElement('section');
            section.classList.add('spotlight');
            section.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            spotlightContainerInner.appendChild(section);
        });

        spotlightContainer.appendChild(spotlightContainerInner);
    }
});
