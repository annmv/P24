class Dustbin 
{
    constructor(x,y,w,h)
    {
        var options = 
        {
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
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
    }
}