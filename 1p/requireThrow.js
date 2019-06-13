function argRequired(arg){
		if(arg===null)
			throw new Error("Error!!!");
}
print(argRequired());
print(argRequired(5));

