var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var img1 = document.querySelector(".img1");

//set random image for img1
img1.setAttribute("src", `images/dice${randomNumber1}.png`);