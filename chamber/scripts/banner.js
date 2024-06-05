document.addEventListener('DOMContentLoaded', () => {
    // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const currentDayOfWeek = new Date().getDay();

    // Check if the current day is Monday, Tuesday, or Wednesday (1, 2, or 3)
    if (currentDayOfWeek >= 1 && currentDayOfWeek <= 3) {
        // Display the event banner
        document.getElementById('event-banner').style.display = 'block';
    }

    // Add event listener to the close button
    document.getElementById('close-banner').addEventListener('click', () => {
        // Hide the event banner when the close button is clicked
        document.getElementById('event-banner').style.display = 'none';
    });
});
