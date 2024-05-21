let string = "DANIEL WEBSITE ";
let i = 0;

setInterval(changeTitle, 1000);

function changeTitle() {
  i++;
  if (i > string.length - 1)
    i = 0;

  if (string[i] == ' ')
    document.getElementById("icon").href = `./public/TitleIcons/Space.png`;
  else
    document.getElementById("icon").href = `./public/TitleIcons/${string[i]}.png`;
}