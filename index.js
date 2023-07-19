var numberOfSoundButtons = document.querySelectorAll(".song").length;
var audioElements = {};

for (var i = 0; i < numberOfSoundButtons; i++) {
  document.querySelectorAll(".song")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    toggleSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event) {
  toggleSound(event.key);
  buttonAnimation(event.key);
});

function toggleSound(key) {
  if (audioElements[key] && !audioElements[key].paused) {
    audioElements[key].pause();
    audioElements[key].currentTime = 0;
  } else {
    playSound(key);
  }
}

function playSound(key) {
  switch (key) {
    case "w":
      audioElements[key] = new Audio("sounds/Enna Solla.mp3");
      break;

    case "a":
      audioElements[key] = new Audio("sounds/Kanmoodi Thirakumbothu.mp3");
      break;

    case "s":
      audioElements[key] = new Audio("sounds/Mayakkam Enna  .mp3");
      break;

    case "d":
      audioElements[key] = new Audio("sounds/Oru Paadhi Kathavu.mp3");
      break;

    case "j":
      audioElements[key] = new Audio("sounds/En Jeevan.mp3");
      break;

    case "k":
      audioElements[key] = new Audio("sounds/New York Nagaram.mp3");
      break;

    case "l":
      audioElements[key] = new Audio("sounds/Oru Paadhi Kathavu.mp3");
      break;

    case "v":
      audioElements[key] = new Audio("sounds/Yaaro Manathile.mp3");
      break;

    default:
      console.log(key);
      return;
  }

  audioElements[key].play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
