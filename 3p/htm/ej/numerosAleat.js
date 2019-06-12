function max(){
    var array = [];
    n= document.getElementById("number").value

    for(var i=0;i<n;i++){
        r=Math.random().toFixed(1)*10
        array=array+r+"\n"
        document.getElementById("text").innerHTML = array    
    }

    //document.getElementById("out").innerHTML = o.toFixed(2) + " degrees F"

}
