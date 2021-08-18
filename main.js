noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(500,500);
    canvas.position(560,100)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#f27c99');
    fill("pink");
    stroke("gray");
    square(noseX, noseY, difference);

}

function modelLoaded(){
    console.log("Model Loaded")
}

function gotPoses(results){
    if(results.length > 0){
        // console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        // console.log("Nose X = "+noseX+" Nose Y = "+noseY)
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = "+leftWristX+" rightWristX"+rightWristX+" Difference = "+difference);
        
    }
}

