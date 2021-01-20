
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof1;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1= new Roof(420, 200, 400, 50);

	bobObject1= new Bob(280, 450, 35);

	bobObject2= new Bob(350, 450, 35);

	bobObject3= new Bob(420, 450, 35);

	bobObject4= new Bob(490, 450, 35);

	bobObject5= new Bob(560, 450, 35);

	Engine.run(engine);

	rope1 = new Rope(bobObject1.body,{x:280, y:200});

	rope2 = new Rope(bobObject2.body,{x:350, y:200});

	rope3 = new Rope(bobObject3.body,{x:420, y:200});

	rope4 = new Rope(bobObject4.body,{x:490, y:200});
	

	rope5 = new Rope(bobObject5.body,{x:560, y:200});
	

  
}


function draw() {
  rectMode(CENTER);
  background("red");
  
  drawSprites();
  	
  rope1.display();	
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

}

function keyPressed(){
	if(keyCode=UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-300,y:-100});
	}
}

