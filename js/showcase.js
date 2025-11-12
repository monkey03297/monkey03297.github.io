const table01 = document.getElementById("Table1");

function ChangeWidth(width){
	table01.style.width = width;
}

function ChangeBorder(width){
	table01.style.borderWidth = width + "px";
}

function ChangeColor(color){
	table01.style.backgroundColor = color;
}

function RESET(){
	table01.style.width = "auto";
	table01.style.borderWidth = "1px";
	table01.style.backgroundColor = "#F9F9A9";
}

let current = 1
const all = 5

const photoList = [
    "./img/img01.png",
    "./img/img02.png",
    "./img/img03.png",
    "./img/img04.png",
    "./img/img05.png"
];

document.getElementById("photo").innerHTML = "<img src=" + photoList[0] +">";
document.getElementById("current").innerHTML = "1";
document.getElementById("all").innerHTML = "5";

function showImage(){
document.getElementById("photo").innerHTML = "<img src=" + photoList[current -1] +">";
document.getElementById("current").innerHTML = current;
}
function nextImage(){
    current < 5 ? current = current + 1 : current = 1;
    showImage();
}
function prevImage(){
    current > 1 ? current = current - 1 : current = 5;
    showImage();
}


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 0, 448);
grd.addColorStop(0, "#000099");
grd.addColorStop(1, "#000000");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 512, 448);

//ground
ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(0, 320, 512, 128);



ctx.beginPath();
ctx.fillStyle = "#FFFF00";
ctx.arc(400, 80, 48, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#333300FF";
ctx.arc(407, 75, 40, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#1F1F3F";
ctx.fillRect(40, 160, 64, 160);
ctx.fillRect(140, 120, 48, 200);
ctx.fillRect(220, 100, 72, 220);
ctx.fillRect(320, 220, 32, 100);
ctx.fillRect(400, 140, 64, 180);
ctx.fillStyle = "#FFFF00";
ctx.fillRect(64, 180, 8, 8);
ctx.fillRect(164, 200, 8, 8);
ctx.fillRect(244, 120, 8, 8);
ctx.fillRect(264, 240, 8, 8);
ctx.fillRect(440, 220, 8, 8);


ctx.fillStyle = "white";
ctx.arc(50,90, 2, 0, 2 * Math.PI);
ctx.fill();
ctx.arc(110,130, 2, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(100, 60, 2, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(200, 50, 2, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(300, 33, 2, 0, 2 * Math.PI);
ctx.fill();


ctx.font = "24px Arial";
ctx.fillText("Canvars Showcase", 4, 30);
ctx.font = "16px Arial";
ctx.fillText("The Night City", 6, 50);
