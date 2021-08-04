
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var stand,smallball;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
    var sbOptions={
      restitution:0.85,
    } 
   var ground_options ={
     isStatic: true
   };
  
   smallball=Bodies.circle(250,10,15,sbOptions);
   World.add(world,smallball);
   stand=Bodies.rectangle(300,200,200,20,ground_options);
   World.add(world,stand);
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(smallball.position.x,smallball.position.y,15);
  rect(stand.position.x,stand.position.y,200,20);
}

