class Pendulum{
    constructor(x,y,r,color){
     var options = {
         restitution:1,
         friction:0,
         frictionAir: 0.0,
         slop :1,
         inertia: Infinity

     };
    this.body = Bodies.circle(x,y,r/2,options);
    this.x = x;
    this.y = y;
    this.r=r;
    this.color = color;
    World.add(world,this.body);

    }
    display(){
        var angles = this.body.angles;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate (angles);
        noStroke();
        //fill (this.color);
        ellipseMode(RADIUS);ellipse(0,0,this.r/2);
        pop();

    }
    
}