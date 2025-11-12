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

var grd = ctx.createLinearGradient(0, 0, 0, 400);
grd.addColorStop(0, "#000099");
grd.addColorStop(1, "#000000");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 512, 448);

//ground
ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(0, 320, 512, 128);


//moon
ctx.beginPath();
ctx.fillStyle = "#FFFF00";
ctx.arc(400, 80, 48, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#333300FF";
ctx.arc(407, 75, 40, 0, 2 * Math.PI);
ctx.fill();

//building
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
//star
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


var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");
var grd2 = ctx2.createLinearGradient(0, 0, 0, 200);
grd2.addColorStop(0, "#CC0000");
grd2.addColorStop(1, "#FF9900");
ctx2.fillStyle = grd2;
ctx2.fillRect(0, 0, 512, 320);

ctx2.beginPath();
ctx2.fillStyle = "#FFFF00";
ctx2.arc(256, 200, 48, 0, 2*Math.PI);
ctx2.fill();

ctx2.beginPath();
grd2 = ctx2.createLinearGradient(0, 200, 0, 320);
grd2.addColorStop(0, "#9966FF66");
grd2.addColorStop(0.4, "#0000CCCC");
ctx2.fillStyle = grd2;
ctx2.fillRect(0, 200, 512, 120);

ctx2.fillStyle="#CCCCCC99";
ctx2.fillRect(50, 100, 64, 16);
ctx2.beginPath();
ctx2.arc(50, 108, 8, 0.5*Math.PI, 1.5*Math.PI);
ctx2.fill();
ctx2.beginPath();
ctx2.arc(114, 108, 8, -0.5*Math.PI, 0.5*Math.PI);
ctx2.fill();

ctx2.fillRect(350, 150, 64, 16);
ctx2.beginPath();
ctx2.arc(350, 158, 8, 0.5*Math.PI, 1.5*Math.PI);
ctx2.fill();
ctx2.beginPath();
ctx2.arc(414, 158, 8, -0.5*Math.PI, 0.5*Math.PI);
ctx2.fill();

ctx2.fillRect(400, 50, 32, 16);
ctx2.beginPath();
ctx2.arc(400, 58, 8, 0.5*Math.PI, 1.5*Math.PI);
ctx2.fill();
ctx2.beginPath();
ctx2.arc(432, 58, 8, -0.5*Math.PI, 0.5*Math.PI);
ctx2.fill();

ctx.font = "24px Arial";
ctx.fillText("Canvars Showcase 2", 4, 30);
ctx.font = "16px Arial";
ctx.fillText("The Sunset", 6, 50);
