document.addEventListener('DOMContentLoaded', () => {
    let secretCode = [];
    const easterEgg = document.getElementById('easter-egg');
    const closeButton = document.querySelector('.close-button');

    // Easter egg trigger on typing 'swan'
    document.addEventListener('keydown', (e) => {
        secretCode.push(e.key.toLowerCase());
        if (secretCode.join('').includes('swan')) {
            easterEgg.classList.remove('hidden');
        }
        if (secretCode.length > 4) {
            secretCode.shift(); // Keep only the last 4 keys
        }
    });

    // Easter egg trigger on 7 rapid taps
    let tapCount = 0;
    let tapTimer;

    document.addEventListener('touchstart', () => {
        tapCount++;
        clearTimeout(tapTimer);

        if (tapCount === 5) {
            easterEgg.classList.remove('hidden');
        }

        tapTimer = setTimeout(() => {
            tapCount = 0;
        }, 1000); // Reset tap count after 1 second of inactivity
    });

    // Close the Easter egg overlay when clicking the close button or outside content
    closeButton.addEventListener('click', () => {
        easterEgg.classList.add('hidden');
    });

    // Close the overlay on mobile by clicking outside the content
    easterEgg.addEventListener('click', (e) => {
        if (e.target === easterEgg) {
            easterEgg.classList.add('hidden');
        }
    });
});

