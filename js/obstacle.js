class Obstacle {

    constructor() {
        this.body = Bodies.rectangle(width, height - 30, 60, 40)
        World.add(world, this.body);

        this.image = loadImage('./images/spikes.png');
        this.width = 60;
        this.height = 40;
    }


    display() {

        var angle = this.body.angle;

        push();

        translate(this.body.position.x, this.body.position.y);
        angleMode(RADIANS);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

        pop();


        Body.setVelocity(this.body, { x: -5, y: 0 });

    }





}