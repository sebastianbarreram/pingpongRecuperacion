/**
 * Esta clase representa el modelo del juego
 * @author Sebastian Barrera Marín
 * @version 1.0.0 12/06/2022
 */
export default class Model {
  /**
   * Esta funcion crea a el modelo del juego con sus atributos time, movement, movementBar
   *  declarados por defecto
   * @param {Function} controlGame funcion que ejecuta el juego cada cierto intervalo de tiempo
   * @param {Object} player1 caracteristicas del jugador 1 
   * @param {Object} player2 caracteristicas del jugador 2
   */
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
