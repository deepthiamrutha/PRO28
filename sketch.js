var stone,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,tree,ground,launcher,boy;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
boy = loadImage('boy.png');	
}

function setup() {
	createCanvas(1300,600);

	engine = Engine.create();
	world = engine.world;
	stone = new Stone(235,420,30);
	mango1 = new Mango(1100,160,30);
	mango2 = new Mango(1170,190,30);
	mango3 = new Mango(1010,190,30);
	mango4 = new Mango(1000,160,30);
  mango5 = new Mango(900,250,30);
  mango6 = new Mango(1080,300,30);
  mango7 = new Mango(1000,260,30);
  mango8 = new Mango(1120,220,30);
  mango9 = new Mango(1020,300,30);
  mango10 = new Mango(1180,250,30);
	tree = new Tree(1050,380,450,600);
	ground = new Ground(650,600,1300,30);
	launcher = new Launcher(stone.body,{x:230,y:450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(boy,200,400,150,250);
  stone.display();
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  launcher.display();
  DetectCollision(stone,mango1);
  DetectCollision(stone,mango2);
  DetectCollision(stone,mango3);
  DetectCollision(stone,mango4);
  DetectCollision(stone,mango5);
  DetectCollision(stone,mango6);
  DetectCollision(stone,mango7);
  DetectCollision(stone,mango8);
  DetectCollision(stone,mango9);
  DetectCollision(stone,mango10);
  drawSprites();
}
function mouseDragged(){
Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY});
}
function mouseReleased(){
launcher.fly();
}
function keyPressed(){
if(keyCode === 32){
  Matter.Body.setPosition(stone.body,{x: 230,y: 450});
  launcher.attach(stone.body);
}
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(stone.body,stone.body.position,{x: 300,y: 600});
}
}
function DetectCollision(stone,mango){
mangoBodyPosition = mango.body.position;
stoneBodyPosition = stone.body.position;
var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance <= mango.r + stone.r){
  Matter.Body.setStatic(mango.body,false);
}
}
