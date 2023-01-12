function somar(n1, n2) {
  return n1 + n2;
}

console.log(somar(2, 2));
console.log(somar.length);
console.log(somar.name);

// function.call()
// function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.

function darBomDia() {
  console.log('Bom dia!');
}

darBomDia.call();
// Mesma coisa de:
darBomDia();

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe)
}

const ul = new Dom('ul');

ul.ativo('ativo')

console.log(ul);
// console.log(ul.element);

const frutas = ['Uva', 'Maçã', 'Banana'];
console.log(frutas);

Array.prototype.mostrarThis = function() {
  console.log(this);
}

Array.prototype.pop.call(frutas);
// Isso acima é a mesma coisa que:
frutas.pop();

console.log(frutas);

// Se parece array
const arrayLike = {
  0: 'item 01',
  1: 'item 02',
  2: 'item 03',
  length: 3
}
console.log(arrayLike);
//Qualquer objeto que seja retornado dessa forma, dar pra interagir com os metodos do prototypes de array

const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains('ativo');
})

console.log(filtro);

// Se transformasse em array, o array possui filter, aí não precisaria fazer tudo isso, já o nodelist não possui

const liArray = Array.from(li);
console.log(liArray);
const filtro2 = liArray.filter((item) => {
  return item.classList.contains('ativo');
})
console.log(filtro2);

// function.apply()
// O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.
const numeros = [3,4,6,1,34,44,32];
// apply consegue receber uma array
console.log(Math.max.apply('null', numeros));
// Já assim não da certo
console.log(Math.max.call(null, numeros));

const lis = document.querySelectorAll('li');
console.log(lis);

function itemPossuiAtivo(item) {
  return item.classList.contains('ativo');
}

const filtro01 = Array.prototype.filter.call(lis, itemPossuiAtivo);
console.log(filtro01);

const filtro02 = Array.prototype.filter.apply(lis, [itemPossuiAtivo]);
console.log(filtro02);


// bind

const li2 = document.querySelectorAll('li');
const li2Array = Array.from(li2);

const filtro3 = Array.prototype.filter.bind(li, (item) => {
  return item.classList.contains('ativo');
})

// precisa ativar
console.log(filtro3());


const $ = document.querySelectorAll.bind(document);
console.log($('li'));


const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}

console.log(carro.acelerar(100, 20));

const honda = {
  marca: 'Honda'
}

const acelerarHonda = carro.acelerar.bind(honda);

console.log(acelerarHonda(200, 20));

// Argumentos Comuns
// Podemos passar argumentos padrões para uma função e retornar uma nova função.

function imc(altura, peso) {
 return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80);

console.log(imc(1.80, 70).toFixed(2));
console.log(imc180(70));