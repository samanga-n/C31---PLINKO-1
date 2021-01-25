const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;


function preload(){
  
 }

function setup() {
  createCanvas(492,650);

  engine=Engine.create();
  world=engine.world;

  myGround = new Ground(246,645,500,10);

  for(var k=7; k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2, 7, divisionHeight));
  }
  
  // div1 = new Divisions(7,523,7,250);
  // div2 = new Divisions(92,523,7,250);
  // div3 = new Divisions(177,523,7,250);
  // div4 = new Divisions(262,523,7,250);
  // div5 = new Divisions(347,523,7,250);
  // div6 = new Divisions(417,523,7,250);
  // div7 = new Divisions(487,523,7,250);

  // if(frameCount%90===0){
    particles.push(new Particles(random((width/2)-50, (width/2)+50), 20,10));
    
  // }

 for(var i=20;i<=490;i=i+50){
    plinkos.push(new Plinko(i,70));
 }

 for(var i=35;i<=490;i=i+50){
  plinkos.push(new Plinko(i,140));
}
  
for(var i=20;i<=490;i=i+50){
  plinkos.push(new Plinko(i,210));
}
for(var i=35;i<=490;i=i+50){
  plinkos.push(new Plinko(i,280));
}
}

function draw() {
  background(0); 
  
  Engine.update(engine);

  myGround.display();
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }

  if(frameCount%40===0){
    particles.push(new Particles(random((width/2)-50, (width/2)+50), 20,10));
    
  }


 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

 
  // div1.display();
  // div2.display();
  // div3.display();
  // div4.display();
  // div5.display();
  // div6.display();
  // div7.display();
  
}