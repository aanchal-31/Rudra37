class Player {
    constructor(){}
    //listen to database for chnages
  
    getCount(){
      var playerCountRef  = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
         playerCount = data.val();
      })
     
    }
  //update back to database
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
}
