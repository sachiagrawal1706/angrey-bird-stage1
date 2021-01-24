const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(width/2,height,width,20)
    box1 = new Box(400,300,70,70);
    box2=new Box(550,300,70,70)
    pig1=new Pig(475,300)
    log1=new Log(475,290,250,PI/2)

      box3 = new Box(400,200,70,70);
    box4=new Box(550,200,70,70)
    pig2=new Pig(475,200)
    log2=new Log(475,190,250,PI/2)
    box5=new Box(475,100,70,70)
    log3=new Log(450,100,150,+PI/7)
    log4=new Log(500,100,150,-PI/7)
    bird=new Bird(10,10,50,50)

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display()
    pig1.display()
    log1.display()
 box3.display();
    box4.display()
    pig2.display()
    log2.display()
    box5.display()
    log3.display()
    log4.display()
    bird.display()

   ground.display()
}