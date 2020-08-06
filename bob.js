class bob{
    constructor(x,y){
        var options = {
            'density' : 1.0,
            'friction' : 1.0,
            'restitution' : 0.5,
        };
        this.body = Bodies.circle(x,y,30,options);
        this.width = 30;
        this.height = 30;
        World.add(world,this.body);   
    };
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        RadiusMode(CENTRE);
        Pop();
    }
}