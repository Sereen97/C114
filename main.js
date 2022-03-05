noseX=0 
noseY=0;
function preload()
{
img=loadImage("https://i.postimg.cc/3Rzt0NHv/cat-removebg-preview.png")
}
 
function setup()
{
canvas= createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("PoseNet Is Initilized");
}
function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
}
}
function draw()
{
image (video,0,0,300,300);
image (img,noseX-50,noseY-90,100,120);
}

function takesnapshot()
{
    save ('Sereen.png')
}