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
                    this.player1ControlArriba = true;
                    // console.log("va en el onkeydown")
                    // console.log(model.player1)
                    if (model.player1.keyPress) {
                        //console.log("entra al if")
                        //console.log(view.divBar1.offsetTop)
                        if (model.player1.keyCode == 81 && view.divBar1.offsetTop >= 0) {
                            // console.log("SUBE!!!!!!!!")
                            view.divBar1.style.top = (view.divBar1.offsetTop - model.movementBar) + "px";
                        }
                        if (model.player1.keyCode == 65 && (view.divBar1.offsetTop + view.divBar1.clientHeight) <= model.height) {
                            view.divBar1.style.top = (view.divBar1.offsetTop + model.movementBar) + "px";
                            //  console.log("baja!!!!!!!!!!!!")
                        }
                    }
                    break;
                case 79: // O
                case 76: // L
                    model.player2.keyCode = e.keyCode;
                    model.player2.keyPress = true;
                    if (model.player2.keyPress) {
                        // console.log("entra al if")
                        // console.log(view.divBar2.offsetTop)
                        if (model.player2.keyCode == 79 && view.divBar2.offsetTop >= 0) {
                            // console.log("SUBE!!!!!!!!")
                            view.divBar2.style.top = (view.divBar2.offsetTop - model.movementBar) + "px";
                        }
                        if (model.player2.keyCode == 76 && (view.divBar2.offsetTop + view.divBar2.clientHeight) <= model.height) {
                            view.divBar2.style.top = (view.divBar2.offsetTop + model.movementBar) + "px";
                            // //console.log("baja!!!!!!!!!!!!")
                        }
                    }
                    break;
            }
        }

        document.onkeyup = function (e) {
            if (e.keyCode == 81 || e.keyCode == 65) {
                model.player1.keyPress = false;
                // //console.log("va en el onkeyup");
                // //console.log(model.player1);
            }
            if (e.keyCode == 79 || e.keyCode == 76) {
                model.player2.keyPress = false;
            }
        }






    }

    init() {
        this.view.divBall.style.left = 0;
        this.view.divBall.state = 1;
        this.view.divBall.direction = 1; // right 1, left 2
        console.log(this.view.divBall.state)
        // //console.log(this.view.divBar1.style)
        // //console.log(this.model.player1)
        // //    console.log("va en el init")
    }


    start() {

        // //console.log("va en el start")
        this.init();
        this.controlGame = setInterval(this.play, this.model.time);
    }



    




    play() {
        // console.log("va en el play");
        //moveBall();


        // checkIfLost();
    }



    // stop() {
    //     clearInterval(controlGame);
    //     var body = document.getElementsByTagName("body")[0];
    //     body.style.background = "#f00";
    // }






}