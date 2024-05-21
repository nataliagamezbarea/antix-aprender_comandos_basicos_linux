const audio = document.getElementById("backgroundAudio");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        playButton.innerHTML = "Detener música 🔇";
    } else {
        audio.pause();
        audio.currentTime = 0;
        playButton.innerHTML = "Reproducir música 🔊";
    }
});
