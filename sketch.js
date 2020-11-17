var box1sprite, box2sprite, box3sprite, box1body, box2body, box3body;
var groundSprite, ground;
var obj2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
    
}

function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);

    var o_options ={
      isStatic : true
      }

    var c_options ={
      restitution : 1
    }   
    engine = Engine.create();
    world = engine.world;

    box1sprite=createSprite(600, 650, 200,20,o_options);
    box1sprite.shapeColor=color("white");

    box2sprite=createSprite(500, 610, 20,100,o_options);
    box2sprite.shapeColor=color("white");

    box3sprite=createSprite(700, 610, 20,100,o_options);
    box3sprite.shapeColor=color("white");

    groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor=color("yellow")

    ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
    World.add(world, ground);
    
    box1body = Bodies.rectangle(600 , 650 , 200 ,20, {isStatic:true});
    World.add(world, box1body);

    box2body = Bodies.rectangle(500 , 610 , 20 ,100, {isStatic:true});
    World.add(world, box2body);

    box3body = Bodies.rectangle(700 , 610 , 20 ,100, {isStatic:true});
    World.add(world, box3body);
    
    obj2 = Bodies.circle(100,600,40,c_options);
    World.add(world, obj2);

    Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS);
  ellipse(obj2.position.x,obj2.position.y,40, 40)
  keyPressed();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(obj2.body,obj2.body.position,{x:85,y:-85});
  }
}