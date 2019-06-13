
function isPositive(x){
    if(x>=0){
        return true;
    }
    else
        return false
}

function isNegative(x){
    return !isPositive(x);
}
print(isPositive(4));
print(isPositive(-4));
print(isNegative(4));
print(isNegative(-4));