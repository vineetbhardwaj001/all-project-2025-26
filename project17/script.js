var pianoKeys = document.querySelectorAll(".piano-keys .key");
var body = document.querySelector("body");

let audio = new Audio();
let allKeys = [];

// Play tune function (normal function)
function playTune(key) {
    audio.src = `tunes/${key}.wav`;
    audio.currentTime = 0;
    audio.play();

    highlightKey(key);
}

// Highlight effect
function highlightKey(key) {
    let pressedKey = document.querySelector(`[data-key="${key}"]`);

    if (!pressedKey) return;

    pressedKey.classList.add("active");
    setTimeout(() => {
        pressedKey.classList.remove("active");
    }, 150);
}

// Store all data-key values + click event
pianoKeys.forEach(function(key) {
    allKeys.push(key.dataset.key);

    key.addEventListener("click", function() {
        playTune(key.dataset.key);
    });
});

// Keyboard press
body.addEventListener("keydown", function(e) {
    let key = e.key.toLowerCase();
    if (allKeys.includes(key)) {
        playTune(key);
    }
});