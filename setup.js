var ctx = document.getElementById("canvas").getContext('2d');
var canvasWidth = 400;
var canvasHeight = 300;
var dice = [];
function createDie(x, y, height, width, dotSize){
  let die = {
    x: x,
    y: y,
    height: height,
    width: width,
    dotSize: dotSize
  }
  dice.push(die);
}

createDie(50,50,50,50,50);
alert (dice[0].x);


