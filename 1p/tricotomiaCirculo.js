print("Ingresa la X: ")
var x = parseInt(readline());
print("Ingresa la Y: ")
var y = parseInt(readline());
print("Ingresa el Radio: ")
var r = parseInt(readline());


var pto = (x*x) * (y*y);
var circun = (r*r);


if(pto == circun){
    print("Sí toca la circunferencia");
}else{
    print("No toca la circunferencia");
}