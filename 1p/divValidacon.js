var n = 3;
var div = 1;

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
       div/=n; 
       print(div);
    }

}
}else{
    print("Error...");
}