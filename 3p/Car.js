class Car{
    constructor (name) {
        this.name = name;
    }
    drive(){}
    start(){
        return this.name+ "Engine started..." + "\n";
    }
    toString(){
        return"Hi, my name is " +this.name;
    }
}

export { Car };