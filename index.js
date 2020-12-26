var randomNumber1 = getRandomNumber();
var randomNumber2 = getRandomNumber();
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var heading = document.querySelector(".container h1");

//set random image for img1
img1.setAttribute("src", `images/dice${randomNumber1}.png`);

//set random image for img1
img2.setAttribute("src", `images/dice${randomNumber2}.png`);

if (randomNumber1 === randomNumber2) {
  heading.innerText = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  heading.innerText = "🚩 Play 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  heading.innerText = "Player 2 Wins 🚩";
}

//generate random number between 1-6
function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}