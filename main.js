noseyX = 0;
noseyY = 0;

function preload(){
clown_nose = loadImage('https://i.postimg.cc/xdghp1q6/monke.png')
}
function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);    
    posenet.on('pose', gotposes);
}
function gotposes(results){
    console.log(results);
if (results.length > 0){
    console.log(results);
    console.log("nosex" + "-" + results[0].pose.nose.x);
    console.log("nosey" + "-" + results[0].pose.nose.y);
    noseyX = results[0].pose.nose.x - 12;
    noseyY = results[0].pose.nose.y- 12;
}
}
function modelLoaded(){
    console.log("model is lllloloooooooaassded ytyayayayayayyayay!!!!!!!!!!!")
}
function draw(){
image(video,0,0,400,300);
image(clown_nose, noseyX, noseyY, 30, 30);
}
function take_a_pic(){
    save('funny_clown_hahahhahahahahahahahahahaha.png');
}