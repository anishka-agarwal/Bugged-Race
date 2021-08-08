var boy, path, coin, runner, road, left, right, edges
function preload(){
   boy = loadAnimation("Runner-1.png" , "Runner-2.png")
   path = loadImage("path.png")
  // coin = loadImage("coin.png")  
  console.log("Loaded preload")
}

function setup(){
  createCanvas(400,400);
   runner = createSprite(180, 340)
   runner.addAnimation("moving boy", boy)
   
  runner.scale= 0.08
   //power = createSprite(80, 100)
   road = createSprite(200, 200)
 
 
 // power.addImage("coin", coin)
  road.addImage("background", path)
  
  road.velocityY= 4
  road.scale = 1.2

  left= createSprite(0,0, 100, 800)
  left.visible= false
  right= createSprite(400, 0, 100, 800)
    right.visible= false

  console.log("Loaded setup")
  
}

function draw() {
  background("blue");
   runner.x= mouseX
   edges= createEdgeSprites()
   runner.collide(edges[3])
   runner.collide(left)
   runner.collide(right)

  if (road.y > 400) {
   road.y = height/2; 
  }
 
drawSprites()
}
