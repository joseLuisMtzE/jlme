class Fraccion{
constructor(n,d){
    this.n=n; //validar que no sean enteror
    this.d=d; /// que denominador no sea 0
};

euclides(a, b) {
    var iaux; 
    a = Math.abs(a); 
    b = Math.abs(b);
    var i1 = Math.max(a, b); 
    var i2 = Math.min(a, b); 
  
    do {
      iaux = i2; 
      i2 = i1 % i2; 
      i1 = iaux;
    } while (i2 !== 0);
    return i1; 
}
suma(frac){
    var n= (this.n *frac.d)+(this.d*frac.n)
    var d=this.d*frac.d;
    return new Fraccion(n,d) 
};
resta(frac){
    var n = (this.n * frac.d) - (this.d * frac.n);
    var d = this.d * frac.d;
    return new Fraccion(n,d)
};
div(frac){
    var n = this.n * frac.d;
    var d = this.d * frac.n;
    return new Fraccion(n,d)
};
mul(frac){ 
    var n= this.n*frac.n;
    var d= this.d*frac.d;
    return new Fraccion(n,d)
}}

var f1=new Fraccion(5,3);
var f2=new Fraccion(20,3);
console.log("------Fraccion 1----------")

//console.log(f1.suma(f2));
console.log(f1.resta(f2));
//console.log(f1.div(f2));
//console.log(f1.mul(f2));
//console.log("------Fraccion 2----------")

//console.log(f2.suma(f1));
//console.log(f2.resta(f1));
//console.log(f2.div(f1));
//console.log(f2.mul(f1));