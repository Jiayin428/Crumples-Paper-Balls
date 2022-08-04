
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var radius = 40;
var groundObj;
var leftSide;
var rightSide;


function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}


	ball=Bodies.circle(200,100,20,ball_options);
  	World.add(world,ball);

	ground =new Ground(200,390,400,20);
	ground.shapeColor = "yellow";
    
	groundObj=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120);

	rectMode(CENTER);
  	ellipseMode(RADIUS);

	Engine.run(engine);
	World.add(world,groundObj)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,radius,radius);

  groundObj.display();
  leftSide.display();
  rightSide.display();

  Engine.update(engine);
  drawSprites();

  groundObj.display();
}

function keyPressed() {
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}