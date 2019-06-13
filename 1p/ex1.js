print("Introduzca el valor de a"); var a= parseInt(readline());
print("Introduzca el valor de b");var b= parseInt(readline());
print("Introduzca el valor de c");var c= parseInt(readline());

//print("------Elemento Neutro Aditivo------");
if(a==0){
    print("El primer numero es un elemento neutro");
}
if(b==0){
    print("El segundo numero es un elemento neutro");
}
if(c==0){
    print("El tercer numero es un elemento neutro");
}

//print("------Elevacion al cuadrado, solo si es negativo------");
if(a<0){
    print("El primer numero elevado al cuadrado es "+ Math.pow(a,2));
}
if(b<0){
    print("El segundo numero elevado al cuadrado es "+Math.pow(b,2));
}
if(c<0){
    print("El tercer numero elevado al cuadrado es "+Math.pow(c,2));
}

//Perimetro del triangulo
var peri= (a+b+c);
print("El perimetro del triangulo es de ");
print(peri);

//las raices de la ecuacion cuadratica
var b2= Math.pow(b,2);
var inside = b2 - (4*(a*c));
var raiz= Math.sqrt(inside);
var cuadsuma=(-b+(raiz))/(2*a);
var cuadresta=(-b-(raiz))/(2*a);
print("x1= "+ cuadsuma);
print("x2= "+ cuadresta);

print(a+","+b+","+c);