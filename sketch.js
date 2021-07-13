var bg,sleep,brush,gym,eat,bath,drink,move;
var astronaut;

function proload(){
  bg = loadImage("iss.png");
  sleep = loadImage("sleep.png");
  brush = loadImage("brush.png");
  gym = loadAnimation("gym1.png","/gym2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  bath = loadImage("bath.png");
  move = loadImage("move.png");
  drink = loadAnimation("drink1.png","drink2.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astronaut = createSprite(300,230);
  astronaut.addImage( sleep);
  astronaut.scale = 0.1;
}
function draw() {
  background(bg);  
  drawSprites

  textSize(20);z 
  fill("white");
  text("instruction:",20,35);
  textSize(15);
  text("UP_ARROW = Brushing",20,55);
  text("DOWN_ARROW = Gymming",20,70);
  text("LEFT_ARROW = Eating",20,85);
  text("RIGHT_ARROW = Bathing",20,100);
  text("m key = Moving",20,115);

  edges=createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addImage("brushing",brush);
    astronaut.ChangeAnimation("brushing");
    astonaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.ChangeAnimation("gymming");
    astonaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.ChangeAnimation("eating");
    astonaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addImage("bathing",bath);
    astronaut.ChangeAnimation("bathing");
    astonaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.ChangeAnimation("moving");
    astonaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }  

}
