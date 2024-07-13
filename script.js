var randomVariable1 = Math.floor(Math.random() * 6) + 1;
var randomVariable2 = Math.floor(Math.random() * 6) + 1;

var diceImage1 = "dice" + randomVariable1 + ".png";
var diceImage2 = "dice" + randomVariable2 + ".png";

var imageSource1 = "./images/" + diceImage1;
var imageSource2 = "./images/" + diceImage2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", imageSource1);
image2.setAttribute("src", imageSource2);

if(randomVariable1 > randomVariable2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!"
}
else if(randomVariable2 > randomVariable1){
    document.querySelector("h2").innerHTML = "Player 2 Wins!!"
}
else{
    document.querySelector("h1").innerHTML = "Draw!!"
}