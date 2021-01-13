const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world , bodies , ground, box, ball;

function setup() {
createCanvas(400,400);

engine = Engine.create();
world = engine.world ;

var options={
  isStatic : true
}

var balloptions={
  restitution : 1.5
}

box = Bodies.rectangle(200,50,50,50);
ground = Bodies.rectangle(0,380,800,20,options);
ball = Bodies.circle(300,50,10,balloptions);

World.add(world,ground);
World.add(world,box);
World.add(world,ball);

 
}

function draw() {
  background(0); 
  
  Engine.update(engine);

  rect(box.position.x,box.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball.position.x,ball.position.y, 20,20)

  drawSprites();
}