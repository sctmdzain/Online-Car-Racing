class Game {
    constructor(){

    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      car1 = createSprite(100,200,);
      car1.addImage(car1img);
      car2 = createSprite(300,200,);
      car2.addImage(car2img);
      car3 = createSprite(500,200,);
      car3.addImage(car3img);
      car4 = createSprite(700,200,);
      car4.addImage(car4img);

      cars = [car1,car2,car3,car4]
    }
  
    play(){
      form.hide();
      textSize(30);
      Player.getPlayerInfo();
  player.getrank();
      if(allPlayers !== undefined){
        background(groundimg)
       image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5);
        //var display_position = 130;
        var index = 0;
        var x = 200
        ;
        var y ;
        
        for(var plr in allPlayers){
          index = index + 1;
          x = x + 200
          y = displayHeight - allPlayers[plr].distance;
console.log(index)
          cars[index-1].x = x;
          cars[index-1].y = y; 

          if(index === player.index){
            fill("white")
            ellipse(x,y,80,80)
            text(allPlayers[plr].name,x,y-70)
            cars[index-1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
      }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      }
      if (player.distance> 3750){
console.log(player.distance)
        gameState = 2 ; 
        player.rank += 1;
        console.log(player.rank)
        Player.updaterank(player.rank);
        alert( player.name + "reached the finish line successfully!!!! ur rank is :: " + player.rank); 
        //game.update(2)

      }
drawSprites();  
  }
  end(){
    console.log("gameended")

  }
  }