class Game {
  constructor(){}
  //listen to database for chnages

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }
//update back to database
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

 async start(){
    if(gameState === 0){
      player = new Player();

      var playerCountRef= await database.ref('playerCount').once("value");
      if(playerCountRef.exists())

{
  playerCount =playerCountRef.val();
  player.getCount();
}      
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(30);
    text("game start ",200,100);
      
  
  }
}
