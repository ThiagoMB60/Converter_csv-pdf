const pdf = require("html-pdf");

class PDFWriter{

	static WritePDF(fileDir, html){
		pdf.create(html, {}).toFile(fileDir, (erro) => {
			console.log(erro);
		});
	}

}

module.exports = PDFWriter;