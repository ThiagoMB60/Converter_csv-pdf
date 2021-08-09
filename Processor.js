class Processor{

	static Process(data){
		var lines = data.split("\r\n"); //separando os elementos por quebra de linha
		var rows = [];

		lines.forEach(row =>{
			var element = row.split(","); //separando os elementos por virgula
			rows.push(element);	//adicionando elementos no a array
		})

		return rows;
	}

}

module.exports = Processor;