song1 = "";
sonng2 = "";

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(350,350);
    canvas.center();
    video = createVideo();
    video.hide();
}

function draw(){
    image(video , 0 , 0 ,350 , 350);
}