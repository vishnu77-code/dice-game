
var random=Math.floor(Math.random()*6)+1;

var rand_dice="dice"+random+".png";

var rand_image= rand_dice;
var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];
image1.setAttribute("src",rand_image);
var random1=Math.floor(Math.random()*6)+1;

var rand_dice1="dice"+random1+".png";

var rand_image1=  rand_dice1;
image2.setAttribute("src",rand_image1)

if(random1 > random){
    document.querySelector("h1").innerHTML="player 2 wins";
    
}
else if(random1 < random) {
    document.querySelector("h1").innerHTML="player 1 wins";
    
}
else{
    document.querySelector("h1").innerHTML="Draw";
}



