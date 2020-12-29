//Create variables here

var dog
var happyDog
var database
var foodS
var foodStock

function preload()
{
  //load images here
  dog=loadImage("dogImg.png")
  happyDog=loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  doge=createSprite(250,250,10,10)
  doge.addImage(dog)
  doge.scale=0.3

  database=firebase.database()

  foodStock=database.ref('food')
  foodStock.on("value",readStock)
}

function draw() {  
  background(46,139,87)

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS)
    doge.addImage(happyDog)
  }

  drawSprites();
  //add styles here
  fill("white")
  text("food left: "+foodS,200,440)

  text("Note: press UP_ARROW Key To Feed Drago Milk!",100,40)
}

function readStock(data){
  foodS=data.val()
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }

  database.ref('/').update({
    food:x
  })
}