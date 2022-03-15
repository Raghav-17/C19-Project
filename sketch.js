var coinStackG 
var coinG
var tresureG
var boulderG
var runner
var money = 0;
var road
var End

var coinStackImg
var coinImg
var tresureImg
var runnerImg
var roadImg
var boulder 
var EndImg

var PLAY=1;
var END=0;
var gameState=1;


function preload(){

 coinStackImg = loadImage("Coinstack.png")
 coinImg = loadImage("Coin.png")
 treasureImg = loadImage("Tresure.jpg")
 runnerImg = loadAnimation("Running1.png","Running2.png")
 roadImg = loadImage("Roadlane.png")
 boulderImg = loadImage("Boulder.png")
 EndImg = loadImage("End.png")
}

function setup() {

 road=createSprite(400,400);
 road.addImage(roadImg);
 road.velocityY = 4;

 runner = createSprite(50,580,20,20);
 runner.addAnimation("RunningMan",runnerImg);
 runner.scale=0.06;
 

 boulderG=new Group();
 treasureG=new Group();
 coinG=new Group();
 coinStackG=new Group();

}

function draw() {

if(gameState===PLAY){
  background(0);
  runner.x = World.mouseX;
 }    
  edges= createEdgeSprites();
  runner.collide(edges);
  
  if(roadlane.y > 400 ){
    roadlane.y = height/2;
  }

  if (gamestate === End) {
    coinG.destroyEach()
    boulderG.destroyEach()
    coinStackG.destroyEach()
    tresureG.destroyEach()


    coinG.setVelocityYEach(0);
    tresureG.setVelocityYEach(0);
    coinStackG.setVelocityYEach(0);
    boulderG.setVelocityYEach(0)

  }

  createcoin();
  createcoinstack();
  createtreasure();
  createboulder();

  if (coinG.isTouching(runner)) {
    coinG.destroy();
    money=money+10;
  }

  if (coinStackG.isTouching(runner)) {
    coinStack.destroy();
    money=money+50;
  }
  if (tresureG.isTouching(runner)) {
    tresureG.destroy();
    money=money+350;
    }

    if (boulderG.isTouching(runner)) {
      boulderG.destroy();
      gameState === End
      }



 drawSprite()

 textSize(20);
  fill(255);
  text("Money: "+ money,10,30);
  
} 

function createCoin() {
  if (World.frameCount % 30 == 0) {
  var coin = createSprite(Math.round(random(50, 350),40, 10, 10));
  coin.addImage(coinImg);
  coin.scale=0.12;
  coin.velocityY = 3;
  coin.lifetime = 150;
  coinG.add(coin);
  }
}

function createCoinStack() {
  if (World.frameCount % 200 == 0) {
  var coinStack = createSprite(Math.round(random(50, 350),40, 10, 10));
  coinStack.addImage(coinStackImg);
  coinStack.scale=0.12;
  coinStack.velocityY = 3;
  coinStack.lifetime = 150;
  coinStackG.add(coinStack);
  }
}

function createTresure() {
  if (World.frameCount % 600 == 0) {
  var tresure = createSprite(Math.round(random(50, 350),40, 10, 10));
  tresure.addImage(tresureImg);
  tresure.scale=0.12;
  tresure.velocityY = 3;
  tresure.lifetime = 150;
  tresureG.add(tresure);
  }
}

function createBoulder(){
  if (World.frameCount % 100 == 0) {
  var boulder = createSprite(Math.round(random(50, 350),40, 10, 10));
  boulder.addImage(swordImg);
  boulder.scale=0.1;
  boulder.velocityY = 3;
  boulder.lifetime = 150;
  boulderG.add(boulder);
  }
}




