document.addEventListener('DOMContentLoaded', () => {
    // Get the badgeList from localStorage
    const badges = JSON.parse(localStorage.getItem('badgeList')) || [];
    let currentIndex = 0;

    const badgeDisplay = document.getElementById('badge-display');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    function displayBadge(index) {
        if (badges.length > 0) {
            const badge = badges[index];
            badgeDisplay.innerHTML = `
                <div class="badge">
                    <img src="${badge[0]}" alt="${badge[1]}">
                    <p>${badge[1]}</p>
                    <p id="body-badge">Congrats on obtaining the badge!<p>
                </div>
            `;
        } else {
            badgeDisplay.innerHTML = '<p>No badges available</p>';
        }
    }

    prevButton.addEventListener('click', () => {
        if (badges.length > 0) {
            currentIndex = (currentIndex === 0) ? badges.length - 1 : currentIndex - 1;
            displayBadge(currentIndex);
        }
    });

    nextButton.addEventListener('click', () => {
        if (badges.length > 0) {
            currentIndex = (currentIndex === badges.length - 1) ? 0 : currentIndex + 1;
            displayBadge(currentIndex);
        }
    });

    displayBadge(currentIndex); // Initial display
});
