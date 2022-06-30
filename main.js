song = "";
leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;
score = "";
scoreLeftWrist=0;

function preload()
{
    song = loadSound("music.mp3")
}

function setup() {
canvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log('PoseNet Is Initalized');    
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
scoreLeftWrist = results[0].pose.keypoints[9].score;
scorerightWrist = results[0].pose.keypoints[10].score;
console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0] .pose. leftWrist.x;
        leftWristY = results[0] .pose. leftWristy;
        console.log("leftWrist = " + leftWristX +"leftWristY = "+  leftWristY);
 
        rightWristX = results[0] .pose. rightWrist.x;
        rightWristY = results[0] .pose. rightWristy;
        console.log("rightWrist = " + rightWristX +"rightWristY = "+  rightWristY);
    }
}


function draw() {
image(video, 0, 0, 600, 500);
fill("red");
stroke("red")

circle(rightWristX,rightWristY,20);

if(rightWristY >0 && rightWristY <= 100)
{
    document.getElementById("speed").innerHTML = "speed = 0.5x";
    song.rate(0.5);
}

else if(rightWristY >100 && rightWristY <=200)
{
    document.getElementById("speed").innerHTML = "speed = 1x";
    song.rate(1);
}


else if(rightWristY >200 && rightWristY <=300)
{
    document.getElementById("speed").innerHTML = "speed = 1x";
    song.rate(1.5);
}


else if(rightWristY >300 && rightWristY <=400)
{
    document.getElementById("speed").innerHTML = "speed = 1x";
    song.rate(2);
}


else if(rightWristY >400 && rightWristY <=500)
{
    document.getElementById("speed").innerHTML = "speed = 1x";
    song.rate(2);
}
if(scoreLeftWrist > 0.2)
{
circle(leftWristX, leftWristY, 20);
InMumberleftWristY = Number(leftWristY);
remove_decimals = floor(InNumberleftWristY);
volume = remove_decimals/500;
document.getElementById("volume").innerHTML = "Volume = " + volume;
song.setVolume(volume);
}
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}