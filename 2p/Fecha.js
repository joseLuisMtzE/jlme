
class Fecha{

    constructor(d,m,a){
        this._d=d;
        this._m=m;
        this._a=a;
        if(typeof(this.d) != "number"){
            console.log("No esu un numero")
        }
        if(typeof(this.m) != "number"){
            console.log("No esu un numero")
        }
        if(typeof(this.a) != "number"){
            console.log("No esu un numero")
        }

    }
    
    //dia
    getDia(){
        return this._d;
    }
    setDia(d){
        this._d=d;
    }
    //mes
    getMes(){
        return this._m;
    }
    setMes(m){
        this._m=m;
    }
    //año
    getAnio(){
        return this._a;
    }
    setAnio(a){
        this._a=a;
    }
    aumentaDia(){
       this._d = this._d+1;
       if(this._d>31){
           this._d=1
       }
       this._m = this._m+1;
       if(this._m>12){
           this._m=1
       }
       this._a= this._a + 1;
       //return this._d + ", " + this._m +", "+this._a;
    }

}

var f=new Fecha(31,12,1999);
