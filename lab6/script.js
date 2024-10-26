const tracks = [
    { src: "track1.mp3", cover: "cover1.jpeg"  },
    { src: "track2.mp3", cover: "cover2.jpeg"},
    { src: "track3.mp3", cover: "cover3.jpeg" }
];

let currentTrackIndex = 0; 
const audioPlayer = document.getElementById("audio-player");
const coverImage = document.getElementById("cover");
const playPauseButton = document.getElementById("play-pause");
const nextButton = document.getElementById("next");
const trackListItems = document.querySelectorAll(".track-list li");

function updateTrack() {
    const currentTrack = tracks[currentTrackIndex];
    audioPlayer.src = currentTrack.src;
    coverImage.src = currentTrack.cover; 
    audioPlayer.play(); 
}

playPauseButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = "Pause";
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = "Play";
    }
});

nextButton.addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;  
    updateTrack();
});

trackListItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        currentTrackIndex = index;
        updateTrack();
    });
});

updateTrack();
