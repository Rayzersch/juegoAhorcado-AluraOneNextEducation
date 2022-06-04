var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");

function drawRightLeg() {
  drawLine(370, 300, 410, 360, "white");
}

function drawLeftLeg() {
  drawLine(370, 300, 340, 360, "white");
}

function drawRightArm() {
  drawLine(370, 160, 410, 200, "white");
}

function drawLeftArm() {
  drawLine(370, 160, 330, 200, "white");
}

function drawBody() {
  drawLine(370, 70, 370, 300, "white");
}

function drawBase() {
  drawLine(150, 500, 350, 500, "white");
}

function drawVertical() {
  drawLine(250, 70, 250, 500, "white");
}

function drawHitch() {
  drawLine(247, 70, 370, 70, "white");
}

function drawRope() {
  drawLine(370, 70, 370, 120, "white");
}



function drawHead() {
  context.beginPath();
  context.arc(370, 130, 20, 0, 2 * Math.PI, false);
  context.fillStyle = "#FFFFFF";
  context.fill();
  context.stroke();
}

function drawLine(beginX, beginY, toX, toY, color) {
  context.beginPath();
  context.moveTo(beginX, beginY);
  context.lineTo(toX, toY);
  context.strokeStyle = color;
  context.lineWidth = 5;
  context.stroke();
}

function drawError() {
  let position = 490;
  context.fillStyle = "white";
  context.font = "30px serif";
  context.fillText(arrWord.join(''), position, 150);
}
