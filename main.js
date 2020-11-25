function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(550,500);
    canvas.position(550,150);
}
function draw(){
    background('#A9A9A9');
    poseNet=ml5.poseNet(video,model_loaded);
poseNet.on('pose' ,got_result);
}
function model_loaded(){
    console.log("pose net is intialized");

}
function got_result(results){
if(results.length>0){
    console.log(results);
}
}