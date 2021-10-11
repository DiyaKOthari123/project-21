
var bullet
var wall,thickness;
var speed,weight;

function setup() 
{
  createCanvas(1600,400);
  speed=random(289,370);
  weight=random(30,52);
  thickness=random(22,83);
 bullet= createSprite(50, 270, 50,20);
  wall= createSprite(1200,200,thickness,height/2);
   wall.shapeColor=("black");
}

function draw() 
{
  background(210);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;


 function hasCollided(lbullet,lwall)
  {
   bulletRightEdge= bullet.x + bullet.width;
   wallLeftEdge=wall.x;
   if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return false;
  
  }
 
  if (hasCollided(bullet,wall))
  {
   bullet.velocityX=0;
   var damage = 0.5 * weight * speed * speed/ (thickness * thickness * thickness);

   if(damage>10)
    {
    wall.shapeColor = color(255,0,0);
    }

    if(damage<10)
    {
     wall.shapeColor=color(o,255,0);

    }

  }

  drawSprites();
}