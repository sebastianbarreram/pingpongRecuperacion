export class Model {
  constructor() {
    this.time = 50;
    this.movement = 20;
    this.movementBar = 20;
    this.width = document.documentElement.clientWidth - this.movement;
    this.height = document.documentElement.clientHeight - this.movement;
    this.controlGame;
    this.player1 = new Object();
    this.player2 = new Object();
    this.player1.keyPress = false;
    this.player1.keyCode = null;
    this.player2.keyPress = false;
    this.player2.keyCode = null;
  }

}