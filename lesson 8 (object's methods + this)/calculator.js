let calculator = {
	firstValue: 0,
	secondValue: 0,
	
	read(){
		this.firstValue = Number(prompt("введите первое значение", "0"));
		this.secondValue = Number(prompt("введите второе значение", "0"));
	},
	
	sum(){
		return this.firstValue + this.secondValue;
	},
	
	mul(){
		return this.firstValue * this.secondValue;
	},
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );