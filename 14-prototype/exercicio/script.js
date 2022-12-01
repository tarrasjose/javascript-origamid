// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
	return `${this.nome} ${this.sobrenome}`
}

const tarras = new Pessoa('Tárras', 'Souza', 30)

console.log(tarras.nomeCompleto())


// function Pessoa(nome, sobrenome, idade) {
// 	this.nome = nome;
// 	this.sobrenome = sobrenome;
// 	this.idade = idade;
// }

// Pessoa.prototype.nomeCompleto = function() {
// 	return `${this.nome} ${this.sobrenome}`
// }

// const joao = new Pessoa('João', 'Pereira de Andrade', 46);
// console.log(joao);
// console.log(joao.nomeCompleto());



// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// Resposta: vai console, digita NodeList.prototype
console.log(NodeList.prototype);
console.log(Object.getOwnPropertyNames(NodeList.prototype));

console.log(HTMLCollection.prototype);
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));

console.log(Document.prototype);
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
console.log(li.constructor.name);//HTMLLIElement
li.click;
console.log(li.click.constructor.name); //Function
li.innerText;
console.log(li.innerText.constructor.name); //string
li.value;
console.log(li.value.constructor.name); //Number
li.hidden;
console.log(li.hidden.constructor.name); //Bollean
li.offsetLeft;
console.log(li.offsetLeft.constructor.name); //Number
li.click(); 
// li.click() dá undefined;

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
console.log(li.hidden.constructor.name); 
// li.hidden é uma boolean, só que a escrita boolean é uma string, o que importa é que retorna



