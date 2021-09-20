var backgroundImg, appleImg, basketImg, dirtImg, farmerImg;
var marketImg, moneyImg, seedsImg, treesImg;

var market, seed, farmer, land1, land2, land3, land4, land5, land6, basket;

var plant1, plant2, plant3, plant4, plant5, plant6;

function preload() {
  backgroundImg = loadImage("images/grass_15.png");
  appleImg = loadImage("images/apple.png");
  basketImg = loadImage("images/basket.png");
  dirtImg = loadImage("images/dirt.png");
  farmerImg = loadImage("images/farmer.png");
  marketImg = loadImage("images/market.png");
  moneyImg = loadImage("images/money.png");
  seedsImg = loadImage("images/seeds.png");
  treesImg = loadImage("images/trees.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  market = createSprite(windowWidth-200, windowHeight-230);
  market.addImage(marketImg);

  seed = createSprite(windowWidth-200, windowHeight/5);
  seed.addImage(seedsImg);
  seed.scale = 0.7;

  farmer = createSprite(windowWidth/4, windowHeight/2);
  farmer.addImage(farmerImg);
  farmer.scale = 2.5;

  var positionX = windowWidth/2-50;
  var positionY = windowHeight/3;

  land1 = new Land(positionX, positionY);
  land2 = new Land(positionX+200, positionY);
  land3 = new Land(positionX+400, positionY);
  land4 = new Land(positionX, positionY+150);
  land5 = new Land(positionX+200, positionY+150);
  land6 = new Land(positionX+400, positionY+150);

  basket = createSprite(windowWidth/2+100, windowHeight/2+200);
  basket.addImage(basketImg);
  basket.scale = 0.5;

  plant1 = createSprite(positionX, positionY);
  plant1.addImage("dirt1",dirtImg);
  plant1.visible = false;

  plant2 = createSprite(positionX+200, positionY);
  plant2.addImage("dirt2",dirtImg);
  plant2.visible = false;

  plant3 = createSprite(positionX+400, positionY);
  plant3.addImage("dirt3",dirtImg);
  plant3.visible = false;

  plant4 = createSprite(positionX, positionY+150);
  plant4.addImage("dirt4",dirtImg);
  plant4.visible = false;

  plant5 = createSprite(positionX+200, positionY+150);
  plant5.addImage("dirt5",dirtImg);
  plant5.visible = false;

  plant6 = createSprite(positionX+400, positionY+150);
  plant6.addImage("dirt6",dirtImg);
  plant6.visible = false;

}

function draw() {
  background(backgroundImg);
  land1.showSquare();
  land2.showSquare();
  land3.showSquare();
  land4.showSquare();
  land5.showSquare();
  land6.showSquare();
  drawSprites();
  showMoneyBar();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

showMoneyBar() {
  push();
  image(moneyImg, width / 2 - 130, positionY - 350, 20, 20);
  fill("white");
  rect(width / 2 - 100, positionY - 350, 185, 20);
  fill("#ffc400");
  //rect(width / 2 - 100, height - player.positionY - 350, player.fuel, 20);
  noStroke();
  pop();
}