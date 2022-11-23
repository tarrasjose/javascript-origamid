// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
	nome: 'Nome pessoa',
	idade: 0,
	andar() {
	  console.log(this.nome + ' andou');
	}
  }

//Resposta 

// function Pessoa(nome, idade) {
// 	this.nome = nome;
// 	this.idade = idade;
// 	this.andar = function() {
// 		console.log(this.nome + ' andou');
// 	}
// }
function Pessoa(nome, idade) {
	this.nome = nome;
	this.idade = idade;
	this.andar = function() {
		console.log(this.nome + ' andou')
	}
}

const antonio = new Pessoa();
antonio.nome = 'Antônio Marinho';
antonio.idade = 45;
antonio.andar();
console.log(antonio);



  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos

	//Resposta

  const joao = new Pessoa();
  joao.nome = 'João';
  joao.idade = 20;

  const maria = new Pessoa();
  maria.nome = 'Maria';
  maria.idade = 25;

  const bruno = new Pessoa();
  bruno.nome = 'Bruno';
  bruno.idade = 15;

  console.log(joao, maria, bruno);
	console.log(joao.idade);
	// console.log(joao.andar())



  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
  
	//Resposta

  // function Dom(seletor) {
	// 	const elementList = document.querySelectorAll(seletor);
	// 	this.elements = elementList;

	// 	this.addClass = function(classe) {
	// 		elementList.forEach((element) => {
	// 			element.classList.add(classe);
	// 		})
	// 	}
		
	// 	this.removeClass = function(classe) {
	// 		elementList.forEach((element) => {
	// 			element.classList.remove(classe);
	// 		})
	// 	}
	// }

	// const listaItens = new Dom('li');
	// console.log(listaItens);

	// //Coloquei uma class no html para testa a remoção

	// listaItens.addClass('ativo');
	// // listaItens.removeClass('ativo');

	function Dom(seletor) {
		const lista = document.querySelectorAll(seletor);
		this.element = lista;

		this.addClass = function(classe) {
			lista.forEach((item) => {
				item.classList.add(classe);
			})
		}

		this.removeClass = function(classe) {
			lista.forEach((item) => {
				item.classList.remove(classe);
			})
		}
	}

	const lista  = new Dom('li');
	console.log(lista);
	lista.addClass('ativo');
	// lista.removeClass('ativo');
	

