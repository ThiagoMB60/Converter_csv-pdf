const fs = require("fs");
const util = require("util");

class Writer{
	constructor(){
		this.writer = util.promisify(fs.writeFile);
	}

	async Write(fileDir, data){
		try{
			await this.writer(fileDir, data)
			return true;
		}catch(error){
			console.log(error);
			return false;	
		}
	}

}

module.exports = Writer;