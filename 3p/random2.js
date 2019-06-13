
function enteros(){
    var array = [];
    for(var i=0;i<10;i++){
        a=Math.random().toFixed(1)*10
        array=array+a+"\n"
        document.getElementById("txt").innerHTML = array    
    }
}