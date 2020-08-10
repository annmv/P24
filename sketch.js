
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,dustbin
;

function setup() 
{
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground = new Ground(400,600,800,20);
	paper = new Paper(200,200,50);
	dustbin = new Dustbin(500,700,100,100);
	Engine.run(engine);
}

function draw() 
{
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin.display();
  drawSprites();
 
  function keyPressed()
  {
	  if(keyCode === UP_ARROW)
	  {
		  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y : -85});
	  }
  }
}



