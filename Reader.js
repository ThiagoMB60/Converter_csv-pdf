const fs = require("fs");	//lib de manipurlação de arquivos
const util = require("util"); //lib de utilidades, usada para converter uma function para promise

class Reader{ //classe de leitura de planilha

	constructor(){
		this.reader = util.promisify(fs.readFile); //convertendo a função de leitura de arquivo em uma promise para usar async away
	}

	async Read(fileDir){
		try{ //tenta executar o bloco
			return await this.reader(fileDir, 'utf8');
		}catch(error){ 	//adiciona a msg de erro dentro da variavel erro
			console.log(error);
			return undefined;
		}
	}

}

module.exports = Reader;