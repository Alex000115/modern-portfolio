const textArray = [
  "Frontend Developer",
  "I build clean UI",
  "Learning JavaScript",
  "Coffee + Code = ❤️"
];

let index = 0;
let currentText = "";
let letterIndex = 0;

function typeEffect() {
  if (letterIndex < textArray[index].length) {
    currentText += textArray[index].charAt(letterIndex);
    document.getElementById("typed-text").innerHTML = currentText;
    letterIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      currentText = "";
      letterIndex = 0;
      index = (index + 1) % textArray.length;
      typeEffect();
    }, 1500);
  }
}

typeEffect();
