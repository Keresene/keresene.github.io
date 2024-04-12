var backgroundMusic = document.getElementById("backgroundMusic");
var muteButton = document.getElementById("muteButton");

function toggleMute() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        muteButton.innerText = "Mute";
    } else {
        backgroundMusic.pause();
        muteButton.innerText = "Unmute";
    }
}

document.addEventListener('play', function(e) {
    if (e.target.tagName.toLowerCase() != 'audio' && e.target.tagName.toLowerCase() != 'video') {
        backgroundMusic.pause();
    }
}, true);
