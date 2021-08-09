class Table{

	constructor(array){
		this.header = array[0];	
		array.shift(); //excluindo o primeiro elemento do array
		this.body = array;
	}

	get RowCount(){
		return this.body.length;
	}

	get ColumnCount(){
		return this.header.length;
	}

}

module.exports = Table;