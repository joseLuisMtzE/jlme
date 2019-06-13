var n = 9;
var resta = 0;

isNumber(n);
function isNumber(x){
    if(typeof x === 'number'){
        return true;
    }else{
        return false;
    }
}
if(isNumber(n)=== true){
for(n;n<=3;n--){
    if(n%2==0){
       resta-=n; 
       print(resta);
    }
}
}else{
    print("Error...");
}