/*
aClass{
    props{

    }
    methods{
        constructor
        propiedades
        comportamiento
    }
}*/

class dog{}
class cat{}
class hero{}
class car{}
class enemy{}
class game{}

class game{
	one(){console.log("performing a complex taks...")}
	two(){}
	three(){}
}

var g= new game();
g.one();


//Ejercicio:  
class robot{
    constructor(name){
    this.name=name;
    }

    speak(){
        console.log("Hola!, yo soy Robix")
    }
    makeCoffee(){
        console.log("Preparando cafe...")
    }
    blinkLight(){
        console.log("No veo... si veo...")
    }
   
}

var a= new robot("aRobot");
var b= new robot();

a.name()
b.speak()
