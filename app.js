var Reader = require("./Reader");
var Processor = require("./Processor")
var Table = require("./Table")
var HtmlParser = require("./HtmlParser")

var leitor = new Reader();

async function main() {
	var data = await leitor.Read("./users.csv"); 
	var spliteddata = Processor.Process(data);
	var usuarios = new Table(spliteddata);
	var html = await HtmlParser.parse(usuarios);

	console.log(html);
}

main();