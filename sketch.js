
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var bottom

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball_options=(
		isStatic=false,
		restitution=0.3,
		friction=0,
		density=1.2
	)
    
	bottom=new ground(400,690,800,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);
  

  ellipse(25,670,30,30,ball_options);
  World.add(ball,world)
  drawSprites();
 
  ground.display();
  
}


//why is the ground not showing
