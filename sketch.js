const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var pig1;
var log1;
var bird;


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,650,50,80);
    box2 = new  Box(1100,650,50,80)
    ground= new Ground(600,680,1200,20)
    pig1= new Pig(1000,650)
    log1= new Log(1000,550,250,PI/2)
    box3 = new Box(900,540,50,80);
    box4 = new  Box(1100,540,50,80)
    pig2= new Pig(1000,540)
    log2= new Log(1000,450,250,PI/2)
    box5= new Box(1000,330,50,80)
    log3= new Log(950,330,125,PI/7)
    log4= new Log(1050,330,125,-PI/7)
    bird= new Bird(200,200)

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   ground.display();
   pig1.display();
   log1.display();
   box3.display();
   box4.display();
   pig2.display();
   log2.display();
   box5.display();
   log3.display();
   log4.display();
   bird.display();
}