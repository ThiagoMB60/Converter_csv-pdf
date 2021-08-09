const fs = require("fs");

fs.readFile("./usuario.json", {encoding: 'utf-8'}, (erro, dados) => {
	if (erro) {
		console.log(erro);
	} else {
		var conteudo = JSON.parse(dados);
		console.log(conteudo);

		conteudo.nome = "Vitória Santos Francisco";
		conteudo.curso = "Curso de Inglês Mário Vergara";
		conteudo.categoria = "Língua Inglesa";

		fs.writeFile("./usuario.json", JSON.stringify(conteudo), (erro) => {
			if (erro) {{
				console.log(`Erro ao tentar escrever no arquivo json: ${erro}`);
			}}
		});
	}
	
});