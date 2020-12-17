var fixedRect, movingRect;
var object,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object = createSprite(200,200,80,30);
  object.shapeColor = "green";
  object.debug = true;
  object2 = createSprite(500,200,80,30);
  object2.shapeColor = "green";
  object2.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  if(collision(movingRect,object2)){
  movingRect.shapeColor = "red";
  object2.shapeColor = "red";

}
else{
  movingRect.shapeColor = "green";
  object2.shapeColor = "green";

}
  bounce(movingRect,fixedRect);
  drawSprites();
}
