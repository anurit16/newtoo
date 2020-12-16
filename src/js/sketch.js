const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var roof;
var mouse;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var sling1;

function setup(){
    canvas = createCanvas(windowWidth / 2,windowHeight/1.5);
    engine =Engine.create();
    world = engine.world;


    roof = new Roof(windowWidth/2-250,windowHeight/1.5-400,350,30)
    pendulum1 = new Pendulum(windowWidth / 2-100,windowHeight/1.5-100,75);
    pendulum2 = new Pendulum(windowWidth / 2-175,windowHeight/1.5-100,75);
	pendulum3 = new Pendulum(windowWidth/2-250,windowHeight/1.5-100,75);
	pendulum4 = new Pendulum(windowWidth/2-325,windowHeight/1.5-100,75);
    pendulum5 = new Pendulum(windowWidth/2-400,windowHeight/1.5-100,75);
    
    sling1 = new Sling(pendulum1.body,roof.body,100,10);
    /*
    var canvasmouse = Mouse.create(canvas.length);
    canvasmouse.pixelRatio = pixelDensity();
    var options = {
        mouse: canvasmouse
    }
    mConstraint = MouseConstraint.create(engine,options);
    World.add(world,mConstraint);
*/        
}
function draw() {
    rectMode(CENTER);
    background(200);
pendulum1.display();
pendulum2.display();
pendulum3.display();
pendulum4.display();
pendulum5.display();
roof.display();
sling1.display();

}

function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY})
}