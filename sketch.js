var player;
var friends;
var witch;
var maze1;
var maze2;
var maze3;
var maze4;


function setup() {
  createCanvas(windowWidth, windowHeight);
  player = createSprite(width/2, height - 50, 40, 40);
  
}



function draw() {
  background(255,255,255);  

  /*spawnFriends();
  spawnWitch(); */

  maze();


  drawSprites();

  if (keyDown (UP_ARROW) ){
    player.y = player.y - 5;
  }

  if (keyDown (DOWN_ARROW) ){
    player.y = player.y + 5;
  }

  if (keyDown (LEFT_ARROW) ){
    player.x = player.x - 5;
  }

  if (keyDown (RIGHT_ARROW) ){
    player.x = player.x + 5;
  }
}

function spawnFriends(){
  if (frameCount % 50 === 0){
friends = createSprite(random(10, width- 10), 0, 40, 40);
friends.shapeColor = "blue";
friends.veloctiyX = random (- 10, 10);
friends.velocityY = 3;
friends.lifetime = height/3;

  }
}

function spawnWitch(){

  if (frameCount % 25 === 0){
witch = createSprite(random (0, width- 15), 0, 50, 60);
witch.shapeColor = "green";
  witch.velocityX = random (-15, 10);
  witch.velocityY = 5;
  witch.lifetime = height/5;

}

}

function maze(){

maze1 = createSprite(550, 600, 250, 10);
maze2 = createSprite(425, 475, 10, 250);
maze3 = createSprite(580, 525, 175, 10);
maze4 = createSprite(500, 435, 10, 175);
}