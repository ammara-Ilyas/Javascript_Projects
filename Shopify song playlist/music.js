let playMaster = document.getElementById("playMaster");
let progressBar = document.getElementById("progressBar");
let audioElement = new Audio("audio/Meherwan (Bekhudi)_128-(WapKing).mp3");
let songItem = Array.from(document.querySelectorAll(".song-item"));
let songName = document.getElementById("song-Name");
let gif = document.getElementById("gif");
let songPlayItem = Array.from(document.querySelectorAll(" .songPlayItem"));
let currentSongIndex = 0;
let songs = [
  {
    songName: "02. Hey Shona.mp3",
    filePath: "audio/02. Hey Shona.mp3",
    coverImg: "image/download (1).jpeg",
  },
  {
    songName: "02. yeh hum aa gy kha.mp3",
    filePath: "audio/10. Ye Hum Aa Gaye Hain Kahan.mp3",
    coverImg: "image/download (2).jpeg",
  },
  {
    songName: "bay khudi.mp3",
    filePath: "audio/Bay_Khudi_OST__BuzzPk_Com_.mp3",
    coverImg: "image/download (3).jpeg",
  },
  {
    songName: "Bijlii Bijlii.mp3",
    filePath: "audio/Bijlee Bijlee Harrdy Sandhu 320 Kbps.mp3",
    coverImg: "image/download.jpeg",
  },
  {
    songName: "Dil Galti .mp3",
    filePath:
      "audio/Dil Galti Kar Baitha Hai - Jubin Nautiyal_128-(WapKing).mp3",
    coverImg: "image/download (1).jpeg",
  },
  {
    songName: "Meri Zindagi.mp3",
    filePath: "audio/Meri Zindagi Hai Tu Satyameva Jayate 2 128 Kbps.mp3",
    coverImg: "image/song img.jpeg",
  },
];
songItem.forEach((element, i) => {
  if (i < songs.length) {
    let image = element.getElementsByTagName("img");
    image[0].src = songs[i].coverImg;
    let name = element.getElementsByClassName("nam");
    // console.log(name[0]);
    name[0].innerText = songs[i].songName;
  }
});

let playPause = () => {
  if (audioElement.paused) {
    // audioElement.src = "audio/02. Hey Shona.mp3";
    audioElement.play();
    playMaster.classList.add("fa-circle-pause");
    playMaster.classList.remove("fa-circle-play");
    gif.style.opacity = "1";
  } else {
    audioElement.pause();
    playMaster.classList.add("fa-circle-play");
    playMaster.classList.remove("fa-circle-pause");
    gif.style.opacity = "0";
    songPlayItem.forEach((element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }); // progressBar.value = audioElement.currentTime;
  }
};
gif.style.opacity = "0";
playMaster.addEventListener("click", () => {
  playPause();
});
//For seeking progressBar
audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  console.log(progress);
  progressBar.value = progress;
});
progressBar.addEventListener("change", () => {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});
// For backward jump
let backward = document.getElementById("backward");
console.log(backward);
backward.addEventListener("click", () => {
  audioElement.currentTime = (audioElement.currentTime * 90) / 100;
  const progress = parseInt(audioElement.currentTime);
  progressBar.value;
  progress;
});
////For forward jump
let forward = document.getElementById("forward");
forward.addEventListener("click", () => {
  audioElement.currentTime = (audioElement.currentTime * 110) / 100;
  const progress = parseInt(audioElement.currentTime);
  progressBar.value;
  progress;
});

//use icons to play and pause song
songPlayItem.forEach((element, i) => {
  element.addEventListener("click", (e) => {
    audioElement.src = songs[i].filePath;
    songName.innerText = songs[i].songName;
    for (let x = 0; x < songPlayItem.length; x++) {
      if (e.target != songPlayItem[x]) {
        progressBar.value = "0";
        songPlayItem[x].classList.remove("fa-circle-pause");
        songPlayItem[x].classList.add("fa-circle-play");
      } else {
        if (
          audioElement.paused &&
          e.target.classList.contains("fa-circle-play")
        ) {
          audioElement.play();
          e.target.classList.add("fa-circle-pause");
          e.target.classList.remove("fa-circle-play");
          playMaster.classList.remove("fa-circle-play");
          playMaster.classList.add("fa-circle-pause");

          gif.style.opacity = "1";
          console.log("clicked");
        } else if (
          audioElement.played &&
          e.target.classList.contains("fa-circle-pause")
        ) {
          audioElement.pause();
          e.target.classList.add("fa-circle-play");
          e.target.classList.remove("fa-circle-pause");
          playMaster.classList.add("fa-circle-play");
          playMaster.classList.remove("fa-circle-pause");
          gif.style.opacity = "0";
          console.log("unclicked");
        }
      }
    }
  });
});

let songPlayList = Array.from(document.querySelectorAll(".song-play-list"));

songPlayList.forEach((element, i) => {
  let audioElement = new Audio(songs[i].filePath);
  audioElement.addEventListener("loadedmetadata", () => {
    let min = Math.round(audioElement.duration / 60);
    let sec = parseInt(audioElement.duration % 60);
    let time = `${min}:${sec}`;
    element.getElementsByTagName("p")[0].innerText = time;
  });
});
