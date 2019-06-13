
var aPoint={
    x:3,
    y:4
}

var bPoint={
    x:-3,
    y:-4,

    distanceAB : function(p1,p2){
        var d1= bPoint.x - aPoint.x;
        var d2= bPoint.y - aPoint.y;
        d1= Math.pow(d1,2);
        d2= Math.pow(d2,2);
        return Math.sqrt(d1+d2);
    }
}

