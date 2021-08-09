class Table{

	constructor(array){
		this.header = array[0];	
		array.shift(); //excluindo o primeiro elemento do array
		this.body = array;

	}

}

module.exports = Table;