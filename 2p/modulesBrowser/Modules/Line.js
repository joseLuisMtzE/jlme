
class Line{

    // constructor(x,y){
    //     this.x=x;
    //     this.y=y;        
    // }


    // toString(){
    //     return this.Lx.toString() + this.Ly.toString();
    // }
    // draw(){
    //     console.log("Draw Point")
    // }
    
    constructor(x,y){
        this.x = x
        this.y = y
    }
    toString(){
        return this.x.toString() + this.y.toString()
    }
}   

//Puntos de la linea
const pointLX = new Point()
const pointLY = new Point(500)

//var l = new Line(0,500)