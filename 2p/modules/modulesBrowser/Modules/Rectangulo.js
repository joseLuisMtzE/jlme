
class Rectangulo{

    constructor(x,y,z,a){
        this.x=x;
        this.y=y;
        this.z=z;
        this.a=a;
        
    }


    toString(){
        return "("+this.x+","+this.y+","+this.x+","+this.a+")";
    }
    draw(){
        console.log("Draw Point")
    }

}
