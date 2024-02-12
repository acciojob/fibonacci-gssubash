function fibonacci(num) {
// your code here
	let result = 0,f=0,s=1;
	if(num==1)
		return f;
	if(num==2)
		return s;
	for(let i=0;i<(num-2);i++){
		result = f+s;
		f = s;
		s = result;
	}
	return result;
	
}

module.exports = fibonacci;
