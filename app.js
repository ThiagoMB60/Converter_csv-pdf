var Reader = require("./Reader");
var Processor = require("./Processor")

var leitor = new Reader();

async function main() {
	var data = await leitor.Read("./users.csv"); 
	var spliteddata = Processor.Process(data);
}

main();