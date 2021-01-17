const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var b1,b2,b3,b4,b5;
var p1,p2;
var l1,l2,l3,l4;
var engine,world,object,ground, ball;
var bird;
function setup() {
  createCanvas(1200,500);
  engine=Engine.create();
  world=engine.world;
  
b1=new Box(700,320,70,70);
b2=new Box(920,320,70,70);
p1= new Pig(810,350);
l1=new Log(810,260,300,PI/2);

b3=new Box(700,240,70,70);
b4=new Box(920,240,70,70);
p2=new Pig(810,220);
l2=new Log(810,180,300,PI/2);

b5=new Box(810,160,70,70);
l3=new Log(760,120,150,PI/7);
l4=new Log(850,150,150,-PI/7);



bird= new Bird(100,100);



ground=new Ground(600,height,1200,20);


 
  
}

function draw() {
  background("deepskyblue");
  Engine.update(engine);
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  ground.display();
  p1.display();
  p2.display();

  l1.display();
  l2.display();
  l3.display();
  l4.display();
  bird.display();
  
}