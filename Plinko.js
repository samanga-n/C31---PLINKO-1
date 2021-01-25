class Plinko {
    constructor(x,y){
        var options={
            isStatic:true
            
        }
        this.r=10;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,this.r,options);
        
        
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        
        push();
        translate(pos.x,pos.y);
      
        ellipseMode(RADIUS);      
        fill(255);
        ellipse(0,0,this.r,this.r); // if in ellipseMode(CENTER), either change this.r given here
        pop();                      // to this.r*2 OR   in 12th line change it to r/2
    }
}