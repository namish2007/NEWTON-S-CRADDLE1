
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  
	engine = Engine.create();
	world = engine.world;
   bob1 = new bob(200,200);
	//Create the Bodies Here.

}

function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  drawSprites();
 
}
