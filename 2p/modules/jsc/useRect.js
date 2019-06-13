load("../../../libs/jlme/geometry/Rectangulo.js")
var p1=new Point(2,4);
var p2=new Point(2,6);
var p3=new Point(6,6);
var p4=new Point(6,4);


r=new Rectangulo(p1,p2,p3,p4);
print(r.toString());