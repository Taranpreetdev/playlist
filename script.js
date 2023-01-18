console.log("Welcome to Spotify");

// Initialize the Variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');

let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    { songName: "Dandelions", filePath: "songs/1.mp3", coverPath: "covers/index1.jpg" },
    { songName: "Calm Down", filePath: "songs/2.mp3", coverPath: "covers/index2.jpg" },
    { songName: "Levitating", filePath: "songs/3.mp3", coverPath: "covers/index3.jpg" },
    { songName: "Gaddi Red Challenger", filePath: "songs/4.mp3", coverPath: "covers/index4.jpg" },
    { songName: "Scars to Your Beautiful", filePath: "songs/5.mp3", coverPath: "covers/index5.jpg" },
    { songName: "Still D.R.E.", filePath: "songs/6.mp3", coverPath: "covers/index6.jpg" },
    { songName: "Kesariya", filePath: "songs/7.mp3", coverPath: "covers/index7.jpg" },
    { songName: "Jalebi Baby", filePath: "songs/8.mp3", coverPath: "covers/index8.jpg" },
    { songName: "Let me love you", filePath: "songs/9.mp3", coverPath: "covers/index9.jpg" },
    { songName: "Let me love you", filePath: "songs/10.mp3", coverPath: "covers/index10.jpg" },



]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})


// audioElement.play()


// Handle play/pause click

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }

    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }


})





// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})


myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })


}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');


    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }

    else {
        songIndex += 1;
    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})


document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }

    else {
        songIndex -= 1;
    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})