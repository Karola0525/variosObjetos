const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies
const Body=Matter.Body
var btn1;
var angle=60;
var obj1,obj2,obj3,obj4


function setup() {
    createCanvas(400,400);
    engine=Engine.create()
    world=engine.world
    var ball_options={
        restitution:0.95,
        frictionAir:0.01
    }
    var ground_options={
        isStatic:true
        
    }
ball=Bodies.circle(100,10,20,ball_options)
World.add(world,ball)
ground=Bodies.rectangle(200,390,400,20,ground_options)
World.add(world,ground)

ground1=Bodies.rectangle(100,300,100,20,ground_options)
World.add(world,ground1)
rectMode(CENTER)
//ellipseMode(RADIUS)
btn1=createImg('up.png') 
btn1.position(20,30)
btn1.size(50,50)
btn1.mouseClicked(vForce)

obj1=new Ground(50,370,50,30)
obj2=new Ground(150,370,50,30)
obj3=new Ground(250,370,50,30)
obj4=new Ground(350,370,50,30)
}




function draw() 
{
  background(51)
    Engine.update(engine)
Matter.Body.rotate(ground1,angle) 
push ();
translate (ground1.position.x,ground1.position.y)
rotate(angle)
rect(0,0,100,20)
pop ();
angle+=0.1


  ellipse(ball.position.x,ball.position.y,20)
  rect(ground.position.x,ground.position.y,400,20)
  obj1.show ()
  obj2.show ()
  obj3.show ()
  obj4.show ()
}
function vForce(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.5});
}

