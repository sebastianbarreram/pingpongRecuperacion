export class View {
  constructor() {

    this.body = document.getElementsByTagName("body")[0];

    this.divBall = document.createElement("div")
    this.divBall.id = "ball"

    this.divBar1 = document.createElement("div")
    this.divBar1.className = "bar"
    this.divBar1.id = "bar1"

    this.divBar2 = document.createElement("div")
    this.divBar2.className = "bar"
    this.divBar2.id = "bar2"

    this.divLine = document.createElement("div")
    this.divLine.id = "line"

    this.body.appendChild(this.divBall)
    this.body.appendChild(this.divBar1)
    this.body.appendChild(this.divBar2)
    this.body.appendChild(this.divLine)

  }

  getBar1(){
    console.log("div bar1")
    console.log(this.divBar1)
    return this.divBar1
  }

  

}