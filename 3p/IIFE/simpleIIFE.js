
//IIFE: Expresión de función ejecutada inmediatamente
(function(x){
    return x
})(2)


//funcion dentro de funcion
(function (x) {
    return function (y){
        return x*y;
    }
})(2)(3)

(function(x){
    return function (y){
        return function (z){
            return x+y+z;
        }
    }
} )(1)(2)(3)


var abc = (function(){
    return {
        hello: function hello (){
            return "Hello World!"
        }
    }
})();

abc.hello();