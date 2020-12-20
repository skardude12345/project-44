class Enemy {

    constructor() {
        this.body = Bodies.rectangle(750, 250, 30, 70);
        World.add(world, this.body);


    }


    display() {
        push()
        fill("green")
        translate(this.body.position.x, this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0, 0, 30, 70);
        pop()

        Body.setVelocity(this.body, { x: -1, y: -0.3 });
    }

}