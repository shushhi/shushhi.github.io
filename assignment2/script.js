const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }

}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

// This section is the buttons I have added for timestamps throughout the video. Each button is 
// a main step in the tutorial which helps in navigating the video a lot easier. Users can also
// simply press the button if they need to re-watch a step or go back. 

const materialsButton = document.querySelector("#materials-button");
materialsButton.addEventListener("click", gotoMaterials)
function gotoMaterials() {
    video.currentTime = 0.0;
}

const step1Button = document.querySelector("#step-1-button");
step1Button.addEventListener("click", gotoStep1);
function gotoStep1() {
    video.currentTime = 30.0;
}

const step2Button = document.querySelector("#step-2-button");
step2Button.addEventListener("click", gotoStep2);
function gotoStep2() {
    video.currentTime = 96.0;
}

const step3Button = document.querySelector("#step-3-button");
step3Button.addEventListener("click", gotoStep3);
function gotoStep3() {
    video.currentTime = 128.0;
}

const step4Button = document.querySelector("#step-4-button");
step4Button.addEventListener("click", gotoStep4);
function gotoStep4() {
    video.currentTime = 168.0;
}

const step5Button = document.querySelector("#step-5-button");
step5Button.addEventListener("click", gotoStep5);
function gotoStep5() {
    video.currentTime = 206.0;
}

const tipButton = document.querySelector("#tip-button");
tipButton.addEventListener("click", gotoTip);
function gotoTip() {
    video.currentTime = 245.0;
}

//---------------------------------------------------------------------------------

// This function will add full screen mode when you double click on the video. This will make
// it easier if users want a closer view of a certain step in the windmill tutorial.

video.addEventListener("dblclick", goFullscreen);

function goFullscreen() {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

//---------------------------------------------------------------------------------

// This button mutes or unmutes the video. I have made it so it changes to a darker pink
// when the video is muted. That ways users can easily differentiate when the video is muted or not

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);
muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound() {
    if(video.muted) {
        muteUnmuteButton.style.backgroundColor ="#FF76CE";
        video.muted = false;
    } else {
        muteUnmuteButton.style.backgroundColor ="#b45493";
        video.muted = true;
    }
}

//---------------------------------------------------------------------------------

// This buttons replays the video when it is clicked

const replayButton = document.querySelector("#replay-button");
replayButton.addEventListener("click", replayVideo);
function replayVideo() {
    video.currentTime = 0;
}

//---------------------------------------------------------------------------------

// This code increases or decreases the volume of the video, depending on which button
// the user clicks

const increaseVolumeButton = document.querySelector("#increase-volume-button");
increaseVolumeButton.addEventListener("click", increaseVolume);
function increaseVolume() {
    if (video.volume < 0.9) {
      video.volume += 0.1;
    }
  }

const decreaseVolumeButton = document.querySelector("#decrease-volume-button");
decreaseVolumeButton.addEventListener("click", decreaseVolume);
function decreaseVolume() {
    if (video.volume > 0.11) {
      video.volume -= 0.1;
    }
  }