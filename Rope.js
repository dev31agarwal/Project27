class Rope{
    constructor(x, y){
        var options = {
            bodyA: x,
            pointB: y
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
       if(this.rope.bodyA!=null){
        var A = this.rope.bodyA.position;
        var B = this.rope.pointB;
        strokeWeight(4);
        line(A.x, A.y, B.x, B.y);
       }
    }
    
}