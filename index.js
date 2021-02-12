var randomNumber1=Math.ceil(6*Math.random());
var randomNumber2=Math.ceil(6*Math.random());

//console.log(randomNumber1);
//console.log(randomNumber2);

document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

if (randomNumber1>randomNumber2){
  //console.log("Player 1 wins!!");
  document.querySelector("h1").innerHTML="Player 1 wins!!";
} else if (randomNumber2>randomNumber1){
  //console.log("Player 2 wins!!");
  document.querySelector("h1").innerHTML="Player 2 wins!!";
} else {
  //console.log("Draw");
  document.querySelector("h1").innerHTML="Draw";
}
