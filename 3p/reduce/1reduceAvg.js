const myArray = [22,9,60,12,4,56]
const suma = (x,y) => x+y;
const avg = myArray =>
myArray.reduce(sum,0)/myArray.length
console.log(avg(myArray))