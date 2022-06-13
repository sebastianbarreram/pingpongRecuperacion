import { game } from "../index.js";
import View from "../View/View.js";

export default class Controller {

    static collidePlayer1() {
        if (ball.offsetLeft <= (bar1.clientWidth) &&
            ball.offsetTop >= bar1.offsetTop &&
            ball.offsetTop <= (bar1.offsetTop + bar1.clientHeight)) {
            return true;
        }
        return false;
    }

    static collidePlayer2() {
        if (ball.offsetLeft >= (game.width - bar2.clientWidth) &&
            ball.offsetTop >= bar2.offsetTop &&
            ball.offsetTop <= (bar2.offsetTop + bar2.clientHeight)) {
            return true;
        }
        return false;
    }

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