document.getElementById('sound').play();

document.getElementById('yes').addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Change to your desired video URL
});


document.getElementById('no').addEventListener('mouseenter', function() {
    moveButton();
});

function moveButton() {
    const button = document.getElementById('no');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;// Function to play sound
    function playSound() {
        const sound = document.getElementById('sound');
        sound.play().catch(error => {
            console.error("Playback prevented: ", error);
        });
    }
    
    // Add event listeners to buttons
    document.getElementById('yes').addEventListener('click', function() {
        playSound(); // Play sound on clicking "Yes"
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Change to your desired video URL
    });
    
    document.getElementById('no').addEventListener('mouseenter', function() {
        moveButton();
    });
    
    // Move the "No" button around the screen
    function moveButton() {
        const button = document.getElementById('no');
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
    
        const randomX = Math.floor(Math.random() * (windowWidth - button.offsetWidth));
        const randomY = Math.floor(Math.random() * (windowHeight - button.offsetHeight));
    
        button.style.position = 'absolute';
        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';
    }
    
    // Play sound when the user interacts with the page (e.g., clicks anywhere)
    document.body.addEventListener('click', function() {
        playSound();
    });
    

    const randomX = Math.floor(Math.random() * (windowWidth - button.offsetWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - button.offsetHeight));

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}
