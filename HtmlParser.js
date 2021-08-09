var ejs = require("ejs");

class HtmlParser{
	static async parse(table){
		return await ejs.renderFile("./table.ejs", {header: table.header, body: table.body});
	}
}

module.exports = HtmlParser;