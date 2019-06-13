    class Vector{
        constructor(a){
            this.a=a;
            this.t=this.a[0];
            // if(typeof a=== Number){
            //     console.log("Is a number");
            // }
        }
    
        initialize(cas,n){ //inicializar un vector con (numero de celdas, numero contenido)
            this.cas = cas
            this.n = n
            for(this.i=0;this.i<this.cas;this.i++){
                this.a[this.i] = this.n
            }
        }

        min(){ //number 
            for (let x of this.a){
                if(this.t > x){
                    this.t=x;
                }
            }
            return this.t;
        }
        max(){ //number
            for (let x of this.a){
                if(this.t < x){
                    this.t=x;
                }
            }
            return this.t;
        }
        suma(){  //number
            this.t=0;
            for (let x of this.a){
                this.t= this.t + x;
            }
            return this.t;
        }
        avg(){ //promedio //number //2.4
            this.t=0;
            for (let x of this.a){
                this.t= this.t + x;     
            }
            this.d= this.t/ this.a.length;
            return this.d;
        }
        vectorize(x,y,n){ // de 0 a 1, 200 numeros (0,1,200)      //regresa un VECTOR
            this.dist = y-x 
                this.div = this.dist/n
                this.c = x //inicia en 1
                for(this.i =0;this.i<n;this.i++){
                    this.c= this.c + this.div 
                    this.a[this.i] = this.c 
                }
        }
        getData(){
            return this.a;
        }
    }
    var vec = new Vector([2,3,-4,5,6])