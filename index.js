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
    const windowHeight = window.innerHeight;

    const randomX = Math.floor(Math.random() * (windowWidth - button.offsetWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - button.offsetHeight));

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}
