// const Dom = {
// 	seletor: 'li',
// 	element() {
// 		return document.querySelector(this.seletor);
// 	},
// 	ativo() {
// 		this.element().classList.add('ativo');
// 	}
// }

// Dom.ativo();
// Dom.seletor = 'ul';
// Dom.ativo();

//2

// function Dom(seletor) {
// 	this.element = function() {
// 		return document.querySelector(seletor);
// 	}
// 	this.ativar = function() {
// 		this.element().classList.add('ativar');
// 	}
// }

// const li = new Dom('li');
// console.log(li)
// const ul = new Dom('ul');
// console.log(ul)
// const lastLi = new Dom('li:last-child');
// lastLi.ativar();

//3

function Dom(seletor) {
	this.element = function() {
		return document.querySelector(seletor);
	}
	this.ativar = function(classe) {
		this.element().classList.add(classe);
	}
}

const li = new Dom('li');
console.log(li)
const ul = new Dom('ul');
console.log(ul)
const lastLi = new Dom('li:last-child');
lastLi.ativar('ativo');