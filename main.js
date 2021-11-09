moushtachex=0;
moushtachey=0;

function preload(){
    moushtache=loadImage('https://i.postimg.cc/28f1NxH9/moustache-removebg-preview.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}
function draw(){
    image(video,0,0,300,300);
    image(moushtache,moushtachex,moushtachey,30,30);
}