
//comun
function foo(){
    console.log("Called Foo!");
}

//anonima
var bar = function (){
    console.log("Called bar!");
}

//IIFE sintax
(function (){
    console.log("This function us invoked inmediately!")
})()

//sintaxis alternativa
(function (){
    console.log("This function ALSO invoked inmediately!")
}())