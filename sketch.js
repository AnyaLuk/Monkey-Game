
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width /2;
  console.log(ground.x)
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  
}


function draw() {
background(255);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,500)
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time: "+ score, 100,50)
  score= Math.round(frameCount/frameRate())
  
  if (ground.x<0)(
  ground.x = ground.width/2
  )
  
  if(keyDown("space")){
  obstacleGroup.velocityX= -3;
  monkey.velocityY=-12
  
}
 
monkey.velocityY= monkey.velocityY + 0.8
  monkey.collide(ground);
  
  drawSprites();
  spawnBananas();
  spawnObstacle();
  
   if(monkey.isTouching(obstacleGroup)){
  monkey.velocityX=0
  bananaGroup.destroyEach();
  bananaGroup.setVelocityXEach(0);
  obstacleGroup.setVelocityXEach(0);
  obstacleGroup.setLifetimeEach(-1);
  score=0;
}
  
  
}

function spawnBananas(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(500,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    //assign lifetime to the variable
    banana.lifetime = 170;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each banana to the group
    bananaGroup.add(banana);
  } 
}


function spawnObstacle(){
  if (frameCount % 300 === 0) {
    var obstacle =createSprite(500,320,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    
    //assign lifetime to the variable
    obstacle.lifetime = 170;
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  } 
}