load("../../libs/jlme/geometry/Point.js")

class Cuadrado{

    constructor(x,y,z,a){
        this.x=x;
        this.y=y;
        this.z=z;
        this.a=a;
        
    }


    toString(){
        return "("+this.x+","+this.y+","+this.x+","+this.a+")";
    }

}
var cuad= new Point(1,1);
print( cuad instanceof Point);