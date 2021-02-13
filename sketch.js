var balloon;
var db,position;

function preload(){
  bg=loadImage("pics/Hot Air Ballon-01.png");

bpic=loadImage("pics/Hot Air Ballon-02.png")

}



function setup() {

  createCanvas(800,400);
  db=firebase.database();
var nodeloc=db.ref("balloon/position")
nodeloc.on("value",readpos,error)
 balloon= createSprite(400, 200, 50, 50);
  balloon.addImage(bpic);
  balloon.scale=0.8;
}

function draw() {
  background(bg);
  if(keyDown(LEFT_ARROW)){
      changePosition(-10,0);
  }
  else if(keyDown(RIGHT_ARROW)){
      changePosition(10,0);
  }
  else if(keyDown(UP_ARROW)){
      changePosition(0,-10);
  }
  else if(keyDown(DOWN_ARROW)){
      changePosition(0,+10);
  }
  drawSprites();
}
function changePosition(x,y){
  db.ref("balloon/position").set({ x : balloon.x + x,
     y : balloon.y + y})

}
function readpos(data){
position=data.val();
balloon.x=position.x;
balloon.y=position.y;
}


function error(){
console.log("error")

}