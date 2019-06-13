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