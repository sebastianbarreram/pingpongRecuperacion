import { game } from "../index.js";
import View from "../View/View.js";

/**
 * Esta clase representa el controlador del juego
 * @author Sebastian Barrera Marín
 * @version 1.0.0 12/06/2022
 */
export default class Controller {

    /**
     * Esta funcion retorna un booleano indicando la colision de la bola con la barra 1
     * @returns valor booleano que representa la colision de la bola con la barra 1
     */
    static collidePlayer1() {
        if (ball.offsetLeft <= (bar1.clientWidth) &&
            ball.offsetTop >= bar1.offsetTop &&
            ball.offsetTop <= (bar1.offsetTop + bar1.clientHeight)) {
            return true;
        }
        return false;
    }

    /**
     * Esta funcion retorna un booleano indicando la colision de la bola con la barra 2
     * @returns valor booleano que representa la colision de la bola con la barra 2
     */
    static collidePlayer2() {
        if (ball.offsetLeft >= (game.width - bar2.clientWidth) &&
            ball.offsetTop >= bar2.offsetTop &&
            ball.offsetTop <= (bar2.offsetTop + bar2.clientHeight)) {
            return true;
        }
        return false;
    }

    /**
     * Esta funcion verifica si la bola esta entre los limites del tablero de juego.
     * Tambien determina al ganador y lo muestra en consola.
     */
    static checkIfLost() {
        if (ball.offsetLeft >= game.width) {
            View.stop(game);
            console.log("punto player 1");
        }
        if (ball.offsetLeft <= 0) {
            View.stop(game);
            console.log("punto player 2");
        }
    }
}