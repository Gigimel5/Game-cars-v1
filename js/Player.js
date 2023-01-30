class Player {
  constructor() {
    this.name = "";
    this.index = 0;
    this.positionX = 0;
    this.positionY = 0;
  }

  getCount() {
    var getCountRef = database.ref("playerCount");
    getCountRef.on("value", data=> {
      playerCount = data.val()
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;
    if (this.index === 1) {
      this.positionX = width / 2 - 100
    } else {
      this.positionX = width / 2 + 100
    }
    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY
    });
  }

  getDistance(){//Donde estoy
    var playerDistanceRef = database.ref("players/player" + this.index);
    playerDistanceRef.on("value",data=>{
      var data=data.val();
      this.positionX=data.positonX;
      this.positionY=data.positonY;
    });//escucha el valor de los datos

  }
}
