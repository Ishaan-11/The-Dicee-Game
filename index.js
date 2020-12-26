var randomNumber1 = getRandomNumber();
var randomNumber2 = getRandomNumber();
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

//set random image for img1
img1.setAttribute("src", `images/dice${randomNumber1}.png`);

//set random image for img1
img2.setAttribute("src", `images/dice${randomNumber2}.png`);

function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}