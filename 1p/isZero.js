function isZero(arg){
	if(arg===0)
		throw new Error("Error!!!");
		else
		return arg;
}
print(isZero(5));
print(isZero(0));

