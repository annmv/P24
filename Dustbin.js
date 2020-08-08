class Dustbin 
{
    constructor(x,y,w,h)
    {
        var options = 
        {
        isStatic: false,
		restitution: 0.3,
		friction: 1,
		density:1
        }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.width = w;
    this.height = h;
    World.add(world,this.body);
    }
    display()
    {
        push();
        translate(this.body.x,this.body.y);
        rotate(this.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}