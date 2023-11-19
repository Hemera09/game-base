var canvas;
var canvasContext;
var winW = window.innerWidth;
var winH = window.innerHeight;

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
	canvas.height = winH - 20;
	canvas.width = winW - 20;

	colorRect(0,0, canvas.width,canvas.height, 'black');

	var framesPerSecond = 30;
    setInterval(function() {
        moveAll();
        drawAll();
    }, 1000/framesPerSecond);
}

function moveAll() {}

function drawAll() {}