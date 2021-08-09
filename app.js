//importação de bobliotecas
var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer");
var PDFWriter = require("./PDFWriter")

//instancia de objetos // **Atenção** métodos de classe 'static' não necessitam de instancia de objeto para sua utilização
var leitor = new Reader();
var escritor = new Writer();

//metodo prncipal
async function main() {
	var data = await leitor.Read("./users.csv"); 
	var spliteddata = Processor.Process(data);
	var usuarios = new Table(spliteddata);
	var html = await HtmlParser.parse(usuarios);

	await escritor.Write(Date.now() + ".html",html);
	PDFWriter.WritePDF(Date.now() + ".PDF",html);

	console.log(html);
}

main();