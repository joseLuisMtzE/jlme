print('Circulo inscrito en triangulo')
var a=5
var b=8
var c=12

var s= (0.5)*(a+b+c)

var mult=(s*(s-a)*(s-b)*(s-c))
var div=Math.sqrt(mult)
var r=div/s
print('El radio del circulo inscrito es '+r)

