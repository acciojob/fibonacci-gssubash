function fibonacci(num) {
// your code here
	let f=0,s=1;
	if(num==1)return 0;
	if(num==2)return 1;

	for(let i=3;i<=num;i++){
		let result = f+s;
		f=s;
		s =result;
	}
	return s;
	
}

module.exports = fibonacci;
