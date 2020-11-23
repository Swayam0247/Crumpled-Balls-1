
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1sprite, box2sprite, box3sprite, box1body, box2body, box3body;
var groundSprite, ground;
var paper1;

function preload()
{
    
}

function setup() {
    createCanvas(1600, 700);
    rectMode(CENTER);

    var o_options ={
      isStatic : true
      }

    
    engine = Engine.create();
    world = engine.world;

    box1sprite=createSprite(1400, 650, 200,20,o_options);
    box1sprite.shapeColor=color("white");

    box2sprite=createSprite(1300, 610, 20,100,o_options);
    box2sprite.shapeColor=color("white");

    box3sprite=createSprite(1500, 610, 20,100,o_options);
    box3sprite.shapeColor=color("white");

    groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor=color("yellow")

    ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
    World.add(world, ground);
    
    box1body = Bodies.rectangle(1400 , 650 , 200 ,20, {isStatic:true});
    World.add(world, box1body);

    box2body = Bodies.rectangle(1300 , 610 , 20 ,100, {isStatic:true});
    World.add(world, box2body);

    box3body = Bodies.rectangle(1500 , 610 , 20 ,100, {isStatic:true});
    World.add(world, box3body);
    
    paper1 = new Paper(300,100);

    Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
 // keyPressed();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:150,y:-150});
  }
}