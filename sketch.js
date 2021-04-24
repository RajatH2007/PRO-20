
var bg, bgImg;

function preload() {
    //load the images here
    bgImg= loadImage("images/garden.png");


}

function setup(){
    createCanvas(800,800);

    bg.createSprite(500,400,200,200);
    bg.addImage(bgImg);
    bg.scale=1.5;

}

function draw() {
    
    background(225);

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
