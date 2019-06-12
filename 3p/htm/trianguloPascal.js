


var n, nt;
n=10;
 for(var i = 0; i < n; i++){
     nt = 1;
     for(var k = 0; k <= i; k++){
        document.write(nt + " ")
        nt = nt * ((i - k)/(k+1));
     }
     document.write("<br>");
 }