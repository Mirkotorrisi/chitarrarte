var music = document.getElementById("music"); // id for audio element

var duration = music.duration; // Duration of audio clip, calculated here for embedding purposes
var pButton = document.getElementById("pButton"); // play button
var playhead = document.getElementById("playhead"); // playhead
var timeline = document.getElementById("timeline"); // timeline
var source = document.getElementById("audioSource");
var list = document.getElementById("list");

// timeline width adjusted for playhead
var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

// play button event listenter
pButton.addEventListener("click", play);

// timeupdate event listener
music.addEventListener("timeupdate", timeUpdate, false);

// makes timeline clickable
timeline.addEventListener(
  "click",
  function (event) {
    moveplayhead(event);
    music.currentTime = duration * clickPercent(event);
  },
  false
);

// returns click as decimal (.77) of the total timelineWidth
function clickPercent(event) {
  return (event.clientX - getPosition(timeline)) / timelineWidth;
}

// makes playhead draggable
playhead.addEventListener("mousedown", mouseDown, false);
window.addEventListener("mouseup", mouseUp, false);

// Boolean value so that audio position is updated only when the playhead is released
var onplayhead = false;

// mouseDown EventListener
function mouseDown() {
  onplayhead = true;
  window.addEventListener("mousemove", moveplayhead, true);
  music.removeEventListener("timeupdate", timeUpdate, false);
}

// mouseUp EventListener
// getting input from all mouse clicks
function mouseUp(event) {
  if (onplayhead == true) {
    moveplayhead(event);
    window.removeEventListener("mousemove", moveplayhead, true);
    // change current time
    music.currentTime = duration * clickPercent(event);
    music.addEventListener("timeupdate", timeUpdate, false);
  }
  onplayhead = false;
}
// mousemove EventListener
// Moves playhead as user drags
function moveplayhead(event) {
  var newMargLeft = event.clientX - getPosition(timeline);

  if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
    playhead.style.marginLeft = newMargLeft + "px";
  }
  if (newMargLeft < 0) {
    playhead.style.marginLeft = "0px";
  }
  if (newMargLeft > timelineWidth) {
    playhead.style.marginLeft = timelineWidth + "px";
  }
}

// timeUpdate
// Synchronizes playhead position with current point in audio
function timeUpdate() {
  var playPercent = timelineWidth * (music.currentTime / duration);
  playhead.style.marginLeft = playPercent + "px";
  if (music.currentTime == duration) {
    pButton.className = "";
    pButton.className = "btn fas fa-play";
  }
}

//Play and Pause
function play() {
  // start music
  if (music.paused) {
    music.play();
    // remove play, add pause
    pButton.className = "";
    pButton.className = "btn fas fa-pause";
  } else {
    // pause music
    music.pause();
    // remove pause, add play
    pButton.className = "";
    pButton.className = "btn fas fa-play";
  }
}

// Gets audio file duration
music.addEventListener(
  "canplaythrough",
  function () {
    duration = music.duration;
  },
  false
);

// getPosition
// Returns elements left position relative to top-left of viewport
function getPosition(el) {
  return el.getBoundingClientRect().left;
}
///

list.onclick = function (e) {
  e.preventDefault();
  var elm = e.target;
  pButton.className = "btn fas fa-pause";
  document.getElementById("title").innerHTML = elm.innerHTML;
  source.src = elm.getAttribute("data-value");
  music.load(); //call this to just preload the audio without playing
  music.play(); //call this to play the song right away
  //play next song
  music.addEventListener("ended", function () {
    var next = elm.nextElementSibling;
    console.log(next);
    document.getElementById("title").innerHTML = next.innerHTML;
    source.src = next.getAttribute("data-value");
    console.log(source.src);
    music.load(); //call this to just preload the audio without playing
    music.play(); //call this to play the song right away
    pButton.className = "btn fas fa-pause";
  });
};
