function decimalToBinary(num) {

	if(num === 0){
		return "0" ;
	}
  // your code here
	let result = "";

	while(num  > 0){
		let d = num %  2;
		result = d+ result;
		num = Math.floor(num / 2);
		
	}
	return result;
}
const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num))
