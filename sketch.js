const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var backgroundImg, towerImage, cannon_image, cannon_base_image;
var canvas, angle, tower, ground, cannon;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  cannon_image = loadImage("./assets/canon.png");
  cannon_base_image = loadImage("./assets/cannonBase.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  angle = 20;
  cannon = new Cannon(180,100,130,100,angle);
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  cannon_image = Bodies.rectangle(180, 100, 130, 100, options);
  World.add(world, cannon_image);

  cannon_base_image = Bodies.rectangle(160,120,400,300,options);
  World.add(world, cannon_base_image);
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);
  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  

  
  push();

  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  image(cannon_base_image, cannon_base_image.position.x,cannon_base_image.position.y, 130, 100);
  image(cannon_image,cannon.position.x,cannon.position.y,160,310);
  pop();  

  cannon.display();
}
