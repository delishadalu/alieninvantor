

function preload(){
    spaceShipImg = loadImage("SpaceShip.png")
    bulletImg= loadImage("Bullet.png")
    alienImg1=loadImage("Alien1.png.png")
    alienImg2=loadImage("Alien2.png.png")
    alienImg3=loadImage("Alien3.png.png")
    alienImg4=loadImage("Alien4.png.png")
    backgroundImg = loadImage("background2.png")
}

function setup(){
   createCanvas(800,800)
   spaceShip = createSprite (400,750,20,10)
   spaceShip. addImage (spaceShipImg)
   spaceShip.scale=0.1

   for(var r1=50;r1<800;r1=r1+50){
    var alien =createSprite(r1,50,20,20)
     alien.addImage(alienImg3)
     alien.scale=0.2
}
for(var r1=50;r1<800;r1=r1+50){
    var alien =createSprite(r1,100,20,20)
    alien.addImage(alienImg2)
    alien.scale=0.2
}
for(var r1=50;r1<800;r1=r1+50){
    var alien =createSprite(r1,150,20,20)
     alien.addImage(alienImg3)
     alien.scale=0.2
}
for(var r1=50;r1<800;r1=r1+50){
    var alien =createSprite(r1,200,20,20)
    alien.addImage(alienImg4)
    alien.scale=0.2
}

}

function draw(){
    background(0)
    spaceShip.x=mouseX
    drawSprites()
}   

function keyPressed(){
    if(keyCode === 32)
    var bullet=createSprite(mouseX,750,10,10)
    bullet.velocityY=-5
   bullet.addImage(bulletImg)
   bullet.scale=0.1
}  