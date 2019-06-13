class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    };

    toString(){
        return"("+this.x+","+this.y+")";
    };
    distancia(){ 
        return Math.abs(this.x-this.y);     
    };

    clone(){
        return new point(this.x,this.y);
    };
}

var a= new point(20,40); //creacion de objeto   

a.distancia(); //invocacion de objeto
