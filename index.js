var randNumber1 = Math.floor(Math.random() * 6) + 1;
var randNumber2 = Math.floor(Math.random() * 6) + 1;

if (randNumber1 > randNumber2) {
    document.querySelector(".container h1").innerHTML = "🚩Player 1 Wins!"
}
else if (randNumber1 < randNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins 🚩!"
}
else {
    document.querySelector(".container h1").innerHTML = "Draw!"
}

var image1 = "images/dice" + randNumber1 + ".png";
var image2 = "images/dice" + randNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", image1);
document.querySelector(".dice .img2").setAttribute("src", image2);