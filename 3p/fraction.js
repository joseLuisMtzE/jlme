function solve(){
    var n1= parseInt(document.getElementById("n1").value);
    var d1= parseInt(document.getElementById("d1").value);
    var n2= parseInt(document.getElementById("n2").value);
    var d2= parseInt(document.getElementById("d2").value);
    var rn;
    var rd;

    console.log("funcion encontrada")
    var select = document.getElementById("op")
    var value=select.value;
    var op = value
    console.log(op)

    switch (op){
        case '+':
            console.log('suma')
            if(d1==d2){
                rn=n1+n2;
                rd=d1;
                console.log(rn+'/'+rd)
                document.getElementById("rn").innerHTML = rn;
                document.getElementById("rd").innerHTML = rd;
            }
            rd=d1*d2;
            rn=(n1*d2)+(n2*d1)
            console.log(rn+'/'+rd)
            document.getElementById("rn").innerHTML = rn;
            document.getElementById("rd").innerHTML = rd;
            break;
        case '-':
            console.log('resta')
            rd=d1*d2;
            rn= ((rd/d1)*n1)-((rd/d2)*n2)
            console.log(rn+'/'+rd)
            document.getElementById("rn").innerHTML = rn;
            document.getElementById("rd").innerHTML = rd;
            break;
        case '*':
            console.log('mul')
            rd=d1*d2;
            rn=n1*n2;
            console.log(rn+'/'+rd)
            document.getElementById("rn").innerHTML = rn;
            document.getElementById("rd").innerHTML = rd;
            break;
        case '/':
            console.log('div')
            rn=n1*d2;
            rd=d1*n2;
            console.log(rn+'/'+rd)
            document.getElementById("rn").innerHTML = rn;
            document.getElementById("rd").innerHTML = rd;
            break;
        default:
            alert('Elije un operador para continuar con la opreacion')
         
    }
}

function reset(){
    document.getElementById("n1").innerHTML=""
    document.getElementById("d1").innerHTML=""
    document.getElementById("n2").innerHTML=""
    document.getElementById("d2").innerHTML=""
    document.getElementById("rn").innerHTML=""
    document.getElementById("rd").innerHTML=""
}