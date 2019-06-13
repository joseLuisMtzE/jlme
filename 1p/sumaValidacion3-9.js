var n = 3;
var suma = 0;

isNumber(n);

function isNumber(x){
    if(typeof x === 'number'){
        return true;
    }else{
        return false;
    }
}
if(isNumber(n)=== true){


for(n;n<=9;n+=2){
    if(n%2==0){
       suma+=n; 
       print(suma);
    }

}
}else{
    print("Error...");
}
