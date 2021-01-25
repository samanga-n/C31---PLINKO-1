class Particles {
    constructor(x,y,r){
        var options={
            // isStatic:false,
            restitution:0.4
            
        }
        this.r=r;
        // this.x=x;
        // this.y=y;
        this.body=Bodies.circle(x,y,this.r,options);
        this.color=color(random(0,255),random(0,255),random(0,255));     
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);      
        fill(this.color);
        ellipse(0,0,this.r,this.r); // if in ellipseMode(CENTER), either change this.r given here
        pop();                      // to this.r*2 OR   in 12th line change it to r/2
    }
}