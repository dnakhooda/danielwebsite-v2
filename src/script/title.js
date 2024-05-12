let titleCharacters = document.getElementsByClassName("website_title")[0].children
let colorTrainStartLetter = {
  red: -1,
  blue: -2,
  pink: -3,
  cyan: -4,
  yellow: -5,
  purple: -6,
  orange: -7,
}

function changeColor(colorTrainStartLetter) {
  for (let i = 0; i < titleCharacters.length; i++) {
    if (i == colorTrainStartLetter.red) {
      titleCharacters.item(i).style.color = "#f00"
    }
    else if (i == colorTrainStartLetter.blue) {
      titleCharacters.item(i).style.color = "#00f"
    }
    else if (i == colorTrainStartLetter.pink) {
      titleCharacters.item(i).style.color = "#f0f"
    }
    else if (i == colorTrainStartLetter.cyan) {
      titleCharacters.item(i).style.color = "#0ff"
    }
    else if (i == colorTrainStartLetter.yellow) {
      titleCharacters.item(i).style.color = "#ff0"
    }
    else if (i == colorTrainStartLetter.purple) {
      titleCharacters.item(i).style.color = "#a0f"
    }
    else if (i == colorTrainStartLetter.orange) {
      titleCharacters.item(i).style.color = "#fa0"
    }
    else {
      titleCharacters.item(i).style.color = "#0f0"
    }
  }
}

function addToColors(colorTrainStartLetter) {
  colorTrainStartLetter.red++;
  if (colorTrainStartLetter.red > titleCharacters.length)
    colorTrainStartLetter.red = 0;
  colorTrainStartLetter.blue++;
  if (colorTrainStartLetter.blue > titleCharacters.length)
    colorTrainStartLetter.blue = 0;
  colorTrainStartLetter.pink++;
  if (colorTrainStartLetter.pink > titleCharacters.length)
    colorTrainStartLetter.pink = 0;
  colorTrainStartLetter.cyan++;
  if (colorTrainStartLetter.cyan > titleCharacters.length)
    colorTrainStartLetter.cyan = 0;
  colorTrainStartLetter.yellow++;
  if (colorTrainStartLetter.yellow > titleCharacters.length)
    colorTrainStartLetter.yellow = 0;
  colorTrainStartLetter.purple++;
  if (colorTrainStartLetter.purple > titleCharacters.length)
    colorTrainStartLetter.purple = 0;
  colorTrainStartLetter.orange++;
  if (colorTrainStartLetter.orange > titleCharacters.length)
    colorTrainStartLetter.orange = 0;
}

setInterval(() => {
  addToColors(colorTrainStartLetter)
  changeColor(colorTrainStartLetter)
}, 375)