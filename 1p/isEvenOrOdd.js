function isEven(x){
    if(x%2===0){
        return true;
    }
    else{
        return false;
    }
}
print(isEven(5));
function isOdd(x){
    return !isEven(x);
}
print(isOdd(5));