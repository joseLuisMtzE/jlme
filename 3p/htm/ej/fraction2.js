function solve(){
    /*var a = document.getElementById("opt").getElementById("suma").value

    if (a=="+"){
        console.log('arre')
    }*/
    var n1=document.calc.n1.value;// Numerator 1
    var d1=document.calc.d1.value;// Numerator 2
    var n2=document.calc.n2.value;// Denominator 1
    var d2=document.calc.d2.value;// Denominator 2
    var op=document.calc.Op.value;// Operator

    switch (op) {
        case "+":
            if(d1==d2){
                
            }else{

            }
            console.log("suma") 
        break;
        case "-":
            console.log("resta") 
        break;
        case "*":
            console.log("mul") 
        break;
        case "/":
            console.log("div") 
        break;
       
        default:
          //Sentencias_def ejecutadas cuando no ocurre una coincidencia con los anteriores casos
          break;
      }
    console.log(n1, d1, n2, d2, op)
}