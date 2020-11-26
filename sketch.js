
var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(100,150);
  thickness = random(50,100);
  weight = random(30,52);

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = color(80,80,180);

  bullet = createSprite(50,200,50,15);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255,255,255)

}

function draw() {
  background("turquoise");

  if(hasCollided(bullet,wall)){

    bullet.velocityX = 0;

    var Damage = 0.5 * weight * speed * speed / thickness * thickness * thickness;

    if(Damage > 10){
      wall.shapeColor = color(255,0,0);
    }
    if(Damage < 10){
      wall.shapeColor = color(0,255,0);
    }

}

drawSprites();

}

function hasCollided(lbullet,lwall){

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;

  }
  return false;

}


