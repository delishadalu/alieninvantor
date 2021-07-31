var bullet
var bullet1
var gameState="play"
function preload(){
    spaceShipImg = loadImage("SpaceShip.png")
    bulletImg= loadImage("Bullet.png")
    alienImg1=loadImage("Alien1.png.png")
    alienImg2=loadImage("Alien2.png.png")
    alienImg3=loadImage("Alien3.png.png")
    alienImg4=loadImage("Alien4.png.png")
    backgroundImg = loadImage("background2.png")
    spaceBlast=loadImage("blast.png")
    alienBullet=loadImage("bluebullet.png")
}

function setup(){
   createCanvas(800,800)
   spaceShip = createSprite (400,750,20,10)
   spaceShip. addImage (spaceShipImg)
   spaceShip.scale=0.1
   spaceShip.debug=true
   spaceShip.setCollider("circle",0,0,300)

   alienGroup= new Group()
   bulletGroup  = new Group()
   bullet1Group  = new Group()


   for(var r1=50;r1<800;r1=r1+50){
     alien =createSprite(r1,50,20,20)
     alien.addImage(alienImg3)
     alien.scale=0.2
     alienGroup.add(alien)
    
}
for(var r1=50;r1<800;r1=r1+50){
    alien =createSprite(r1,-50,20,20)
    alien.addImage(alienImg3)
    alien.scale=0.2
    alienGroup.add(alien)
   
}
for(var r1=50;r1<800;r1=r1+50){
     alien =createSprite(r1,100,20,20)
    alien.addImage(alienImg2)
    alien.scale=0.2
    alienGroup.add(alien)
    
}
for(var r1=50;r1<800;r1=r1+50){
    alien =createSprite(r1,-100,20,20)
   alien.addImage(alienImg2)
   alien.scale=0.2
   alienGroup.add(alien)
   
}
for(var r1=50;r1<800;r1=r1+50){
     alien =createSprite(r1,150,20,20)
     alien.addImage(alienImg3)
     alien.scale=0.2
     alienGroup.add(alien)
     
}
for(var r1=50;r1<800;r1=r1+50){
    alien =createSprite(r1,-150,20,20)
    alien.addImage(alienImg3)
    alien.scale=0.2
    alienGroup.add(alien)
    
}
for(var r1=50;r1<800;r1=r1+50){
     alien =createSprite(r1,200,20,20)
    alien.addImage(alienImg4)
    alien.scale=0.2
    alienGroup.add(alien)
    
}
for(var r1=50;r1<800;r1=r1+50){
    alien =createSprite(r1,-200,20,20)
   alien.addImage(alienImg4)
   alien.scale=0.2
   alienGroup.add(alien)
   
}
for(var r1=50;r1<800;r1=r1+50){
    alien =createSprite(r1,0,20,20)
   alien.addImage(alienImg4)
   alien.scale=0.2
   alienGroup.add(alien)
   
}
alienGroup.setVelocityYEach(0.3)
}

function draw(){
    background(0)
    if(gameState==="play"){
      
       
        spaceShip.x=mouseX
        bulletGroup.collide(alienGroup, aliendie)
        bullet1Group.collide(spaceShip, spacedie)
        if (frameCount % 50 ===0 ){
            bullet1=createSprite(random(10,790),220,10,10)
            bullet1.velocityY=5
           bullet1.addImage(alienBullet)
           bullet1.scale=0.1
           bullet1Group.add(bullet1)
           bullet1.setCollider("circle",0,0,20)
           bullet1.debug=true
        }
    }
    
    if(gameState === "end"){
        alienGroup.setVelocityYEach(0)
    }
    drawSprites()

   

    
}   

function aliendie(bullet,alien){
    alien.destroy()
    bullet.destroy()
}

function spacedie(bullet1,spaceShip){
    bullet1.destroy()
    spaceShip.addImage(spaceBlast)
    spaceShip.x=400
    spaceShip.y=500
    spaceShip.scale=0.5
    gameState = "end"
}
function keyPressed(){
    if(gameState === "play"){
    if(keyCode === 32)
    bullet=createSprite(mouseX,750,10,10)
    bullet.velocityY=-5
   bullet.addImage(bulletImg)
   bullet.scale=0.1
   bulletGroup.add(bullet)
   bullet.setCollider("circle",0,-200,20)
   bullet.debug=true
    }
   
}  