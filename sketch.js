const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var player, ground, obstacle, monster, groundSp, landScape;
var obstacleArr, monsterArr;
var groundImg, landScapeImg;

function preload() {
  groundImg = loadImage('./images/ground.png');
  landScapeImg = loadImage('./images/gameLandscape.png');
}

function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;

  player = new Player();
  ground = new Ground(width / 2, 380, width * 2, 40);


  landScape = createSprite(width, height / 2, width * 2, 40);
  landScape.addImage(landScapeImg);
  landScape.velocityX = -0.8


  groundSp = createSprite(width, 380, width * 2, 40);
  groundSp.addImage(groundImg);
  groundSp.velocityX = -5;


  obstacleArr = [];
  monsterArr = [];


  /*
  swordHand = new Constraint1(player.body, sword);

  sword = Bodies.rectangle(200, 200, 20, 50);
  World.add(world, sword);

  
  swordHand = Constraint.create({
    bodyA: player.body,
    bodyB: sword,
    stiffness: 0.1,
    length: 5
  })

  World.add(world, swordHand);
  */

}

function draw() {
  background(255, 255, 255);
  Engine.update(engine)


  

  player.jump();

  ground.display();

  if (groundSp.x <= 0) {
    groundSp.x = width;
  }

  if (landScape.x <= 0) {
    landScape.x = width;
  }


  /*
  rectMode(CENTER);
  rect(sword.position.x, sword.position.y, 20, 50);
  */


  drawSprites();

  if (frameCount % 80 === 0) {
    obstacle = new Obstacle();
    obstacleArr.push(obstacle);
  }

  if (frameCount % 1000 === 0) {
    monster = new Enemy();
    monsterArr.push(monster);
  }


  if (obstacle != undefined) {

    for (let i = 0; i < obstacleArr.length; i++) {

      var o = obstacleArr[i];
      if (o != undefined) {
        o.display();
        collide(player, o, i);
      }

    }

  }

  if (monster != undefined) {

    for (let i = 0; i < monsterArr.length; i++) {

      var m = monsterArr[i];
      if (m != undefined) {
        m.display();
        //detectCollision(player, m, i);
      }

    }

  }



  




  player.display();


}

/*
function keyPressed(){
  if (keyDown("e")){
   
  }
}
*/


function collide(player, obs, i) {

  if (player.body.position.x - obs.body.position.x <= ((obs.width) + 3) / 2 + ((player.width) + 3) / 2
    && obs.body.position.x - player.body.position.x <= ((obs.width) + 3) / 2 + ((player.width) + 3) / 2
    && player.body.position.y - obs.body.position.y <= ((obs.height) + 3) / 2 + ((player.height) + 3) / 2
    && obs.body.position.y - player.body.position.y <= ((obs.height) + 3) / 2 + ((player.height) + 3) / 2) {

    player.health -= 10;

    World.remove(world, obs.body);
    delete obstacleArr[i]
  }

}

