import DATE from "./Controller/Controller.js";
import Model from "./Model/Model.js";
import View from "./View/View.js";

export let game = new Model()

function start() {
    init();
    game.controlGame = setInterval(play, game.time);
}

function play() {
    View.moveBall(game);
    View.moveBar(game);
    DATE.checkIfLost(game);
}

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

document.onkeyup = function (e) {
    if (e.keyCode == 81 || e.keyCode == 65)
        game.player1.keyPress = false;
    if (e.keyCode == 79 || e.keyCode == 76)
        game.player2.keyPress = false;
}

start();




