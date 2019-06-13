var careful = 3.1
careful
3.1
careful= 1.3 //watch out
1.3
careful
1.3
var careful=null
undefined
>>> careful
null


let price=120.25
undefined
price 
120.25
let price =20.125
Exception: SyntaxError: //Can't create duplicate variable: 'price'
price
120.25
let price =20.125
Exception: SyntaxError: //Can't create duplicate variable: 'price'
price
120.25
price= 20.125
20.125
>>> price
20.125
price=null
null
>>> price
null


const tax=0.825
undefined
const tax=0.825
Exception: SyntaxError: //Can't create duplicate variable: 'tax'
tax = 1.25
Exception: TypeError: //Attempted to assign to readonly property.
tax = 1.25
Exception: TypeError: //Attempted to assign to readonly property.
tax
0.825


const sam = { first: "Sam", age: 2 }
undefined
typeof sam
object
sam 
//[object Object]
const sam = {}
Exception: SyntaxError: //Can't create duplicate variable: 'sam'
sam.age
2
sam.age=3
3
sam.age=3
3
sam.age=3
3
sam.age
3
sam
//[object Object]


const greet= "dude"
undefined
typeof greet
string
greet[0]="r"
r
greet
dude


const pearl= Object.freeze({ fisrt: "pearñ", age: 1})
undefined
pearl
//[object Object]
const pearl = {}
Exception: SyntaxError: //Can't create duplicate variable: 'pearl'
pearl.age
1
pearl.age=3
3
pearl.age
1
pearl
//[object Object]

