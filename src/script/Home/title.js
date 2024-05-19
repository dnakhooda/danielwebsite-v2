let titleCharacters = document.getElementsByClassName("full_screen_section")[0].children
let colorTrainStartLetter = {
  red: [-1, "#f00"],
  blue: [-2, "#00f"],
  pink: [-3, "#f0f"],
  cyan: [-4, "#0ff"],
  yellow: [-5, "#ff0"],
  purple: [-6, "#a0f"],
  orange: [-7, "#fa0"],
  green: [-8, "#0f0"],
  white: [-9, "#fff"]
}

function changeColor(colorTrainStartLetter) {
  for (const property in colorTrainStartLetter) {
    colorTrainStartLetter[property][0]++;
    if (colorTrainStartLetter[property][0] > titleCharacters.length - 1)
      colorTrainStartLetter[property][0] = 0

    if (colorTrainStartLetter[property][0] > -1)
      titleCharacters.item(colorTrainStartLetter[property][0]).style.color = colorTrainStartLetter[property][1]
  }
}

setInterval(() => changeColor(colorTrainStartLetter), 375)