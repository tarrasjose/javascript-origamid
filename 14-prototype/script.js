function Pessoa(nome, idade) {
	this.nome = nome;
	this.idade = idade;
}

var obj = {
	nome: 'André',
	idade: 33,
}

Pessoa.prototype.andar = function() {
	return this.nome + ' pessoa andou';
}

Pessoa.prototype.nadar = function() {
	return this.nome + ' pessoa nadou';
}

const andre = new Pessoa('André', 28);
console.log(Pessoa.prototype);
console.log(andre.prototype);


const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;
