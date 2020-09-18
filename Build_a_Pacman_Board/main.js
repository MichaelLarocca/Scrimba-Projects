//loops and arrays part 3

//Challenge: Build a pac-man board. A pacman board is a board 18 x 18 squares large that has squares
//coloured based on if there is a wall in the square, a power-pellet in the square, a pac-dot in the
//square, pac-man himself, or the four ghosts, inky, blinky, pinky and clyde. Based on the game //board example, and what you have learned about if statements and adding classes in javascript, I //would like you to create your own pac-man board. Be as creative with the maze as you like.

//I have gone ahead an added 324 squares for you in the html and made an array for you to work //with.

//please dont forget to share your code on the #share-your--code channel on discord.

const squares = Array.from(document.querySelectorAll(".grid div"));

// prettier-ignore
const overlayArray = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,3,3,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,3,3,3,3,1,
    1,3,1,1,1,1,3,1,1,1,1,1,3,1,1,3,1,1,1,1,1,3,1,1,1,1,3,1,
    1,2,1,1,1,1,3,1,1,1,1,1,3,1,1,3,1,1,1,1,1,3,1,1,1,1,2,1,
    1,3,1,1,1,1,3,1,1,1,1,1,3,1,1,3,1,1,1,1,1,3,1,1,1,1,3,1,
    1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
    1,3,1,1,1,1,3,1,1,3,1,1,1,1,1,1,1,1,3,1,1,3,1,1,1,1,3,1,
    1,3,1,1,1,1,3,1,1,3,1,1,1,1,1,1,1,1,3,1,1,3,1,1,1,1,3,1,
    1,3,3,3,3,3,3,1,1,3,3,3,3,1,1,3,3,3,3,1,1,3,3,3,3,3,3,1,
    1,1,1,1,1,1,3,1,1,1,1,1,0,1,1,0,1,1,1,1,1,3,1,1,1,1,1,1,
    0,0,0,0,0,1,3,1,1,1,1,1,0,1,1,0,1,1,1,1,1,3,1,0,0,0,0,0,
    0,0,0,0,0,1,3,1,1,0,0,0,0,4,0,0,0,0,0,1,1,3,1,0,0,0,0,0,
    0,0,0,0,0,1,3,1,1,0,1,1,1,9,9,1,1,1,0,1,1,3,1,0,0,0,0,0,
    1,1,1,1,1,1,3,1,1,0,1,0,0,0,0,0,0,1,0,1,1,3,1,1,1,1,1,1,
    0,0,0,0,0,0,3,0,0,0,1,0,6,5,7,0,0,1,0,0,0,3,0,0,0,0,0,0,
    1,1,1,1,1,1,3,1,1,0,1,0,0,0,0,0,0,1,0,1,1,3,1,1,1,1,1,1,
    0,0,0,0,0,1,3,1,1,0,1,1,1,1,1,1,1,1,0,1,1,3,1,0,0,0,0,0,
    0,0,0,0,0,1,3,1,1,0,0,0,0,10,0,0,0,0,0,1,1,3,1,0,0,0,0,0,
    0,0,0,0,0,1,3,1,1,0,1,1,1,1,1,1,1,1,0,1,1,3,1,0,0,0,0,0,
    1,1,1,1,1,1,3,1,1,0,1,1,1,1,1,1,1,1,0,1,1,3,1,1,1,1,1,1,
    1,3,3,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,3,3,3,3,1,
    1,3,1,1,1,1,3,1,1,1,1,1,3,1,1,3,1,1,1,1,1,3,1,1,1,1,3,1,
    1,3,1,1,1,1,3,1,1,1,1,1,3,1,1,3,1,1,1,1,1,3,1,1,1,1,3,1,
    1,2,3,3,1,1,3,3,3,3,3,3,3,3,8,3,3,3,3,3,3,3,1,1,3,3,2,1,
    1,1,1,3,1,1,3,1,1,3,1,1,1,1,1,1,1,1,3,1,1,3,1,1,3,1,1,1,
    1,1,1,3,1,1,3,1,1,3,1,1,1,1,1,1,1,1,3,1,1,3,1,1,3,1,1,1,
    1,3,3,3,3,3,3,1,1,3,3,3,3,1,1,3,3,3,3,1,1,3,3,3,3,3,3,1,
    1,3,1,1,1,1,1,1,1,1,1,1,3,1,1,3,1,1,1,1,1,1,1,1,1,1,3,1,
    1,3,1,1,1,1,1,1,1,1,1,1,3,1,1,3,1,1,1,1,1,1,1,1,1,1,3,1,
    1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
];

for (let i = 0; i < squares.length; i++) {
  if (overlayArray[i] === 0) {
    squares[i].classList.add("blank");
  }
  if (overlayArray[i] === 1) {
    squares[i].classList.add("wall");
  }
  if (overlayArray[i] === 2) {
    squares[i].classList.add("powerPellet");
  }
  if (overlayArray[i] === 3) {
    squares[i].classList.add("pellet");
  }
  if (overlayArray[i] === 4) {
    squares[i].classList.add("ghost");
    squares[i].classList.add("blinky");
  }
  if (overlayArray[i] === 5) {
    squares[i].classList.add("ghost");
    squares[i].classList.add("pinky");
  }
  if (overlayArray[i] === 6) {
    squares[i].classList.add("ghost");
    squares[i].classList.add("inky");
  }
  if (overlayArray[i] === 7) {
    squares[i].classList.add("ghost");
    squares[i].classList.add("clyde");
  }
  if (overlayArray[i] === 8) {
    squares[i].classList.add("pacMan");
  }
  if (overlayArray[i] === 9) {
    squares[i].classList.add("lairWall");
  }
  if (overlayArray[i] === 10) {
    squares[i].classList.add("bonusFruit");
  }
}
// Round out gameboard
for (let i = 56; i < 812; i++) {
  // squares[i].classList.add('bonusFruit');

  // roundTopLeft
  if (
    (squares[i].classList.contains("wall") &&
      squares[i - 1].classList.contains("pellet") &&
      squares[i + 1].classList.contains("wall") &&
      squares[i - 28].classList.contains("pellet")) ||
    (squares[i].classList.contains("wall") &&
      squares[i - 1].classList.contains("blank") &&
      squares[i + 1].classList.contains("wall") &&
      squares[i - 28].classList.contains("pellet")) ||
    (squares[i].classList.contains("wall") &&
      squares[i - 1].classList.contains("blank") &&
      squares[i + 1].classList.contains("wall") &&
      squares[i - 28].classList.contains("blank")) ||
    (squares[i].classList.contains("wall") &&
      squares[i - 1].classList.contains("pellet") &&
      squares[i + 1].classList.contains("wall") &&
      squares[i - 28].classList.contains("blank"))
  ) {
    //    squares[i].classList.add('bonusFruit');
    squares[i].classList.add("roundTopLeft");
  }

  // roundTopRight
  if (
    (squares[i].classList.contains("wall") &&
      squares[i + 1].classList.contains("pellet") &&
      squares[i - 1].classList.contains("wall") &&
      squares[i - 28].classList.contains("pellet")) ||
    (squares[i].classList.contains("wall") &&
      squares[i + 1].classList.contains("blank") &&
      squares[i - 1].classList.contains("wall") &&
      squares[i - 28].classList.contains("pellet")) ||
    (squares[i].classList.contains("wall") &&
      squares[i + 1].classList.contains("blank") &&
      squares[i - 1].classList.contains("wall") &&
      squares[i - 28].classList.contains("blank")) ||
    (squares[i].classList.contains("wall") &&
      squares[i + 1].classList.contains("pellet") &&
      squares[i - 1].classList.contains("wall") &&
      squares[i - 28].classList.contains("blank"))
  ) {
    //    squares[i].classList.add('bonusFruit');
    squares[i].classList.add("roundTopRight");
  }

  // roundBottomLeft
  if (
    (squares[i].classList.contains("wall") &&
      squares[i - 1].classList.contains("pellet") &&
      squares[i + 1].classList.contains("wall") &&
      squares[i - 28].classList.contains("wall") &&
      squares[i + 28].classList.contains("pellet")) ||
    (squares[i].classList.contains("wall") &&
      squares[i - 1].classList.contains("blank") &&
      squares[i + 1].classList.contains("wall") &&
      squares[i - 28].classList.contains("wall") &&
      squares[i + 28].classList.contains("blank")) ||
    (squares[i].classList.contains("wall") &&
      squares[i - 1].classList.contains("pellet") &&
      squares[i + 1].classList.contains("wall") &&
      squares[i - 28].classList.contains("wall") &&
      squares[i + 28].classList.contains("blank")) ||
    (squares[i - 1].classList.contains("blank") &&
      squares[i - 28].classList.contains("wall") &&
      squares[i + 28].classList.contains("pellet"))
  ) {
    //    squares[i].classList.add('bonusFruit');
    squares[i].classList.add("roundBottomLeft");
  }

  // roundBottomRight
  if (
    (squares[i].classList.contains("wall") &&
      squares[i + 1].classList.contains("pellet") &&
      squares[i - 1].classList.contains("wall") &&
      squares[i - 28].classList.contains("wall") &&
      squares[i + 28].classList.contains("pellet")) ||
    (squares[i].classList.contains("wall") &&
      squares[i + 1].classList.contains("blank") &&
      squares[i - 1].classList.contains("wall") &&
      squares[i - 28].classList.contains("wall") &&
      squares[i + 28].classList.contains("pellet")) ||
    (squares[i].classList.contains("wall") &&
      squares[i + 1].classList.contains("blank") &&
      squares[i - 1].classList.contains("wall") &&
      squares[i - 28].classList.contains("wall") &&
      squares[i + 28].classList.contains("blank")) ||
    (squares[i].classList.contains("wall") &&
      squares[i + 1].classList.contains("pellet") &&
      squares[i - 1].classList.contains("wall") &&
      squares[i - 28].classList.contains("wall") &&
      squares[i + 28].classList.contains("blank"))
  ) {
    //    squares[i].classList.add('bonusFruit');
    squares[i].classList.add("roundBottomRight");
  }
}
squares[252].classList.add("roundBottomLeft");
squares[293].classList.add("roundBottomLeft");
squares[364].classList.remove("roundTopLeft");
squares[391].classList.remove("roundTopRight");
squares[420].classList.remove("roundTopLeft");
squares[447].classList.remove("roundTopRight");
squares[559].classList.add("roundTopRight");
squares[630].classList.add("roundBottomRight");

//
squares[431].classList.add("lairText");
squares[432].classList.add("lairText");
squares[433].classList.add("lairText");
squares[434].classList.add("lairText");
squares[435].classList.add("lairText");
squares[436].classList.add("lairText");

//lairText

squares[431].innerHTML = "R";
squares[432].innerHTML = "E";
squares[433].innerHTML = "A";
squares[434].innerHTML = "D";
squares[435].innerHTML = "Y";
squares[436].innerHTML = "!";
