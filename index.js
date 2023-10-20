class Instrument {

    constructor(imageAsset, audioAsset, key) {
        this.imageAsset = imageAsset;
        this.audioAsset = audioAsset;
        this.key = key;


        document.querySelector(`.${this.key}`).style.backgroundImage = `url(${this.imageAsset})`;
        document.querySelector(`.${this.key}`).addEventListener("click", onClickBtn);
    }

    play() {
        playSound(this.audioAsset)
    }
}
// document.querySelector("button").addEventListener("click", onClickBtn);

const soundsDir = "./sounds";
const imagesDir = "./images";

var tom1 = new Instrument(`${imagesDir}/tom1.png`, `${soundsDir}/tom-1.mp3`, `w`);
var tom2 = new Instrument(`${imagesDir}/tom2.png`, `${soundsDir}/tom-2.mp3`, `a`);
var tom3 = new Instrument(`${imagesDir}/tom3.png`, `${soundsDir}/tom-3.mp3`, `s`);
var tom4 = new Instrument(`${imagesDir}/tom4.png`, `${soundsDir}/tom-4.mp3`, `d`);
var snare = new Instrument(`${imagesDir}/snare.png`, `${soundsDir}/snare.mp3`, `k`);
var crash = new Instrument(`${imagesDir}/crash.png`, `${soundsDir}/crash.mp3`, `j`);
var kickBass = new Instrument(`${imagesDir}/kick.png`, `${soundsDir}/kick-bass.mp3`, `l`);


document.addEventListener("keydown", (event) => {
    playDrumByKey(event.key);
})

function onClickBtn(evt) {
    var key = this.innerHTML;
    playDrumByKey(key);
}

function playSound(audioSource) {
    var audio = new Audio(audioSource);
    audio.play();
}

function playDrumByKey(key) {
    switch (key) {
        case "w":
            playSound("./sounds/tom-1.mp3");
            break;
        case "a":
            playSound("./sounds/tom-2.mp3");
            break;
        case "s":
            playSound("./sounds/tom-3.mp3");
            break;
        case "d":
            playSound("./sounds/tom-4.mp3");
            break;
        case "j":
            playSound("./sounds/crash.mp3");
            break;
        case "k":
            playSound("./sounds/snare.mp3");
            break;
        case "l":
            playSound("./sounds/kick-bass.mp3");
            break;
    }

    makeAnimation(key);
}

function makeAnimation(key) {
    var activeButton = document.querySelector("." + key);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}