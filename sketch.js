function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
edges=createEdgeSprites();
 player = createSprite(50,550,30,30);
 obs_1 = createSprite(50,400,80,30);
 obs_1.shapeColor="red"
 obs_2 = createSprite(550,200,80,30);
 obs_2.shapeColor='red'
 obs_3 = createSprite(550,300,80,30);
 obs_3.shapeColor='red'
 snake1 = createSprite (70,450,74,25)
 snake1.shapeColor = "yellow"
 snake2 = createSprite (400,100,74,35)
 snake2.shapeColor = "yellow"
 target = createSprite(550,50,30,30);
 target.shapeColor="blue"
 obs_1.velocityX=5
 obs_2.velocityX=-5
 obs_3.velocityX = 5
 snake1.velocityX = 4
 snake2.velocityX = -4

}

function draw() {
  background("black");  
  obs_2.bounceOff(edges[0])
  obs_2.bounceOff(edges[1])
  obs_1.bounceOff(edges[0])
  obs_1.bounceOff(edges[1]) 
  obs_3.bounceOff(edges[0])
  obs_3.bounceOff(edges[1]) 
  snake1.bounceOff(edges[0])
  snake1.bounceOff(edges[1])
  snake2.bounceOff(edges[0])
  snake2.bounceOff(edges[1])
  drawSprites();
player.bounceOff(edges[0]);
 player.bounceOff(edges[1]);
 player.bounceOff(edges[2]);
 player.bounceOff(edges[3]);

 if(keyDown("up")){
  player.y=player.y-3;
}
if(keyDown("down")){
  player.y=player.y+3;
}
if(keyDown("right")){
  player.x=player.x+3;
}
if(keyDown("left")){
  player.x=player.x-3;
}
if(player.isTouching(obs_1)){
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs_2)){
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs_3)){
  text("YOU LOSE",200,200);
}
if(player.isTouching(snake1)){
  player.x=50 
  player.y=550
  text("YOU LOSE",200,200);
}
if(player.isTouching(snake2)){
  player.x=50 
  player.y=550
  text("YOU LOSE",200,200);
}
if(player.isTouching(target)){
  text("YOU WIN",200,200);
}
}
