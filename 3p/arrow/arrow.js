let f1 = function multiply(a,b){
    return a*b
}

//Arrow function
let multiply = (a,b) => a*b
multiply(1,2)

//Empty function
let empty = () => {

}

(() => "pine")()
//return  "pine"
//Esta es una IIFE

var max = (a,b) => a>b ?a :b

var simple = a =>20 ?20 :a

simple(21)
simple(20)

