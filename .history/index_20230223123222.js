

var randomNumber1 = Math.random();
var randomNumber2 = Math.random();

randomNumber1 = Math.round(randomNumber1 * 5 + 1);
randomNumber2 = Math.round(randomNumber2 * 5 + 1);


document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1)
{
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>
}
