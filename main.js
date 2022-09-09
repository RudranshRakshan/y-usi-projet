s1 = "";
s2 = "";
song = '';
leftWX = 0;
leftWY = 0;
rightWX = 0;
rightWY = 0;
set = 0;
obj=[];
function preload() {
    // song = loadSound("");
    s1 = loadSound("music.mp3");
    s2 = loadSound("music2.mp3");

}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(600, 500);
    video.hide();

    pose = ml5.poseNet(video, modelLoaded);
    pose.on('pose', gotPoses);
}
function draw() {
    s1.rate(0.5)
    // s1.play();
        image(video, 0, 0, 600, 500);
    // song.play();
    fill("grey");
    stroke("grey");
    circle(leftWX, leftWY, 10);
    circle(rightWX, rightWY, 10);
    inNumLeftY = Number(floor(leftWY))
    vol = inNumLeftY / 500;
    // song.setVolume(vol);
    inNumRightY = Number(rightWY);
    if(obj.length>0){
    if (obj[0].pose.leftWrist.confidence > 0.006) {
        // song = s1;
        s1.play();
    }
    else {
        // song = "";
        s1.stop();
    }
}
}

function modelLoaded() {
    console.log("Model is loaded");
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        leftWX = result[0].pose.leftWrist.x;
        leftWY = result[0].pose.leftWrist.y;
        rightWX = result[0].pose.rightWrist.x;
        rightWY = result[0].pose.rightWrist.y;
        console.log(leftWX + " " + leftWY);
        console.log(rightWX + " " + rightWY);
obj=result;

    }
}


