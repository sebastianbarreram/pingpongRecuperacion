import Controller from "./Controller/Controller.js";
import Model from "./Model/Model.js";
import View from "./View/View.js";

export let game = new Model()

/**
 * Esta funcion inicializa el juego
 */
function start() {
    init();
    game.controlGame = setInterval(play, game.time);
}

/**
 * Esta funcion mueve la bola y las barras, y constantemente verifica el estado del juego
 */
function play() {
    View.moveBall(game);
    View.moveBar(game);
    Controller.checkIfLost(game);
}

/**
 * Esta funcion inicializa las variables del juego
 */
function init() {
    ball.style.left = 0;
    ball.state = 1;
    ball.direction = 1;
    game.player1 = new Object();
    game.player2 = new Object();
    game.player1.keyPress = false;
    game.player1.keyCode = null;
    game.player2.keyPress = false;
    game.player2.keyCode = null;
}

/**
 * Esta funcion detecta la tecla al ser presionada y da la orden de 
 * mover la barra respectiva
 * @param {Event} e presionar una tecla
 */
document.onkeydown = function (e) {
    e = e || window.event;
    switch (e.keyCode) {
        case 81:
        case 65:
            game.player1.keyCode = e.keyCode;
            game.player1.keyPress = true;
            break;
        case 79:
        case 76:
            game.player2.keyCode = e.keyCode;
            game.player2.keyPress = true;
            break;
    }
}

/**
 * Esta funcion detecta la tecla al momento de soltarla y da la orden
 * de detener el movimiento de la barra respectiva
 *  
 * @param {Event} e soltar la tecla
 */
document.onkeyup = function (e) {
    if (e.keyCode == 81 || e.keyCode == 65)
        game.player1.keyPress = false;
    if (e.keyCode == 79 || e.keyCode == 76)
        game.player2.keyPress = false;
}

start();




