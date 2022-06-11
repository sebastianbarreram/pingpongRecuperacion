export class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view


        document.onkeydown = function (e) {
            e = e || window.event;
            switch (e.keyCode) {
                case 81: // Q
                case 65: // A
                    model.player1.keyCode = e.keyCode;
                    model.player1.keyPress = true;
                    console.log("va en el onkeydown")
                    console.log(model.player1)
                    break;
                case 79: // O
                case 76: // L
                    model.player2.keyCode = e.keyCode;
                    model.player2.keyPress = true;
                    break;
            }

        }

        document.onkeyup = function (e) {
            if (e.keyCode == 81 || e.keyCode == 65)
                model.player1.keyPress = false;
            if (e.keyCode == 79 || e.keyCode == 76)
                model.player2.keyPress = false;
            console.log("va en el onkeyup")
            console.log(model.player1)
        }



    }

    init() {
        this.view.divBall.style.left = 0;
        this.view.divBall.state = 1;
        this.view.divBall.direction = 1; // right 1, left 2
        this.model.player1 = new Object();
        this.model.player2 = new Object();
        this.model.player1.keyPress = false;
        this.model.player1.keyCode = null;
        this.model.player2.keyPress = false;
        this.model.player2.keyCode = null;
        console.log(this.model.player1)
        console.log("va en el init")
    }


    start() {
        console.log("va en el start")
        this.init();
        this.controlGame = setInterval(this.play, this.model.time);
    }


    

    play() {
        console.log("va en el play");
        // moveBall();
        //this.model.moveBar(this.model.player1.keyPress);
        // checkIfLost();
    }

    // stop() {
    //     clearInterval(controlGame);
    //     var body = document.getElementsByTagName("body")[0];
    //     body.style.background = "#f00";
    // }






}