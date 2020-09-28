var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var rank = 0 ;
var car1,car2,car3,car4,cars ;
var car1img,car2img, car3img,car4img;
var trackimg,groundimg;

function preload(){
  trackimg = loadImage("../images/track.jpg")
groundimg = loadImage("../images/ground.png")
car1img = loadImage("../images/car1.png")
car2img = loadImage("../images/car2.png")
car3img = loadImage("../images/car3.png")
car4img = loadImage("../images/car4.png")


}

function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-30)
  database = firebase.database();
  console.log(database)
  game = new Game();
  game.getState();
  game.start();
}



function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    

  }

  if(gameState === 2){
    game.end();
  }

  //console.log("gameState")
}