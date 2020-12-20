class Player {

    constructor() {
        this.body = Bodies.rectangle(400, 200, 50, 70);
        World.add(world, this.body);

        this.image = loadImage('./images/sam.png')

        this.health = 100;

        //this.sword = Bodies.rectangle(250, 200, 10, 30);
        //World.add(world, this.sword);

        //this.constraint;

        this.width = 50;
        this.height = 70;

        Body.setMass(this.body, 51);

    }

    display() {


        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        angleMode(RADIANS);
        rotate(angle);
        imageMode(CENTER);
        rectMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);


        pop();
        // push()
        // fill("blue");
        // rect(this.sword.position.x, this.sword.position.y, 10, 30);
        // pop()

    }

    jump() {
        if (keyDown("space") && this.body.position.y >= 320) {
            Body.setVelocity(this.body, { x: 0, y: -10 });
        }

        if (keyDown(DOWN_ARROW) && this.body.position.y <= 320) {
            Body.setVelocity(this.body, { x: 0, y: 7 });
        }

    }

    /* attack(){
        this.constraint = Constraint.create({
            bodyA: this.body,
            bodyB: this.sword,
            stiffness: 5,
            length: 3
        });

        World.add(world, this.constraint);

        
    }
    */

}