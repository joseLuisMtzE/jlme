div(4,8);

function div(n, n2){
    var r = n / n2;
    var i = isNumber(r);
    if(i==true){
        return r;
    }else{
        return "Número no válido."
    }
        
}

var isNumber = function(a){
    if(typeof a === 'number'){
        return true;
    }else{
        return false;
    }
}