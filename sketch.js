const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player
var computer
var b1
var b2
function setup() {
  canvas = createCanvas(1600, 800);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
player=new Player(300,400,50,200)
computer=new Computer(1300,400,50,200)
b1=new Playerbase(300,550,200,200)
b2=new Computerbase(1300,550,200,200)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  player.display()
  computer.display()
  b1.display()
  b2.display()
   //Display Playerbase and computer base 


   //display Player and computerplayer


}
