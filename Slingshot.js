class Slingshot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }


    display(){
        
        var bodyA = this.sling.bodyA.position;
        var bodyB = this.sling.bodyB.position;
        strokeWeight(6);
        stroke("pink")
        line(bodyA.x, bodyA.y, bodyB.x, bodyB.y);
        
    }
    
}