  
var towerImg, tower;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
}


function draw() {
  background(255);
  
  if (gameState === "play") {
    
    if(keyDown("left")){
  
      // write a code to move left when left arrow is pressed
      ghost.x=ghost.x-2
    }
    if(keyDown("right")){
  
                        
      // write a code to move left when right arrow is pressed
      ghost.x=ghost.x+2
    }
    if(keyDown("space")){
  
   
      // write a code to move up when space arrow is pressed
      ghost.velocityY=-10
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;
  
   
      //write a condition for infinte scrolling tower
    if(tower.y>400){
      tower.y=300              
    }
     

  
      //write a code to make climbersGroup collide with ghost change the ghost velocity  
      if(ghost.isTouching(climbersGroup)){
        ghost.velocityY=0;  
      }
//write a code to make invisibleBlockGroup collide with ghost destroy the ghost and make gamestate to end.
  if(ghost.isTouching(invisibleBlockGroup)){
    ghost.destroy();
    gameState="end"
  }
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}


    //change the depth of the ghost and door
    
     

    
    //assign lifetime to the obstacle.lifetime = 300; here  obstacle are door, climber and invisible block


    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are door, climber and invisible block
  

