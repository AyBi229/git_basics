var canvas = document.getElementById("yellow");
var context = canvas.getContext("2d");

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 25;
var fillColor = "yellow";

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = fillColor;
context.fill();
context.closePath();
console.log((100*50)/400);