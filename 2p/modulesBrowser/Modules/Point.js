class Point{
    constructor(x,y){
        this._x=x;
        this._y=y;
        console.log("geometry>Point>constructor");
        
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
    draw(){
        console.log("Draw Point")
    }


    get x(){
        return this.x
    }

    get y(){
        return this.y
    }

    set x(x){
        this._x=x
    }   

    set y(y){
        this._y=y
    }
}

