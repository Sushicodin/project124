function preload(){

}

function setup(){
canvas=createCanvas(550,550);
canvas.position(560,160);
webcam=createCapture(VIDEO);
webcam.size(450,450);

poseNet=ml5.poseNet(webcam, modelLoaded);

poseNet.on("pose", gotPoses);
}

function draw(){
background("green");
}

function modelLoaded(){
console.log("The Model Has Loaded");
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
    }

}