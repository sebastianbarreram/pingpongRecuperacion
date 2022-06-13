export default class Model {
  constructor(controlGame, player1, player2) {
    this.time = 100;
    this.movement = 20;
    this.movementBar = 20;
    this.width = document.documentElement.clientWidth - this.movement;
    this.height = document.documentElement.clientHeight - this.movement;
    this.controlGame = controlGame;
    this.player1 = player1;
    this.player2 = player2;
  }
}
