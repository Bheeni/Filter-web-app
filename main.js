noseX= 0;
noseY= 0;

function preload(){

tiara = loadImage("https://i.postimg.cc/VkVsQZXS/white-wedding-floral-crown-pale-blue-flower-headband-floral-head-wreath-wedding-headband-bridesm-500.png");

}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
image(video, 0, 0, 300, 300);
image(tiara, noseX, noseY, 100, 50);
}

function Take_snapshot(){
save("My_image.png");
}

function modelLoaded(){
    console.log("model is loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x ="+results[0].pose.nose.x);
        console.log("noes y ="+results[0].pose.nose.y);
        noseX = results[0].pose.nose.x -30;
        noseY = results[0].pose.nose.y -120;
    }
}