var plant = {
  isSeed : true,
  isAlive : true,
  height : 0,
  feed : function(string){
    if(plant.isAlive === true){
      if(plant.isSeed === true){
        plant.isSeed = false;
        console.log(plant.isSeed);
      }
      else if(plant.height <= 12){
        console.log("plant is alive");
        plant.height += string;
        console.log(plant.height);
        if(string === 0){
          plant.isAlive = false;
        }
      }
    }
    if(plant.isAlive === false){
      console.log("Your plant is dead you fool");
    }

  },

  foodType : {
    water : 2,
    antifreeze: 0,
    fertilizer: 1,
  }
}
