

var randomNumber1 = Math.random();

randomNumber1 = Math.round(randomNumber1 * 5 + 1);

document.getElementsByClassName("img").setAttribute("src", "images/dice" + randomNumber1 + ".png");

