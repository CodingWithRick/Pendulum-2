class Rope {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            // length: 50,
            stiffness: 1.2
        }
        this.rope = Matter.Constraint.create(options);
        this.pointB = pointB;
        this.bodyA = bodyA;
        World.add(world, this.rope);
    }
    display() {
        push();
        strokeWeight(2);
        stroke("#fff");
        line(this.pointB.x, this.pointB.y, this.rope.bodyA.position.x, this.rope.bodyA.position.y);
        pop();
    }
}