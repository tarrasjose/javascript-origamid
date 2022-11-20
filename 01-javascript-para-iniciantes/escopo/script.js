function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
//console.log(carro); // Erro, carro is not defined, é só colocar o var para fora da função que irá funcionar

//com var vaza 
if(true) {
  var mes = 'Dezembro';
  console.log(mes);
}

console.log(mes);
// com let não vaza
if(true) {
  let cor = 'green';
  console.log(cor);
}
//console.log(cor); //dá erro, pois não consegue a acessar let dentro do bloco

if(true) {
  const carro = 'Fusca';
  console.log(carro);
}

//console.log(carro); //dá erro, pois não consegue a acessar const dentro do bloco

var i = 50;
for(var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}

console.log(i); //var i vazou o escopo e aqui fora é 10
//Foi criado antes um var i = 50 e passou valer 10, porque simplesmente vazou e escreveu por cima

let x = 50;

for(let x = 0; x < 10; x++) {
  console.log(x);
}

console.log(x); //Já com let não vaza, enquanto for verdadeiro lá vai valer o x, no caso x vai até 9 e aqui fora que criamos um let x = 50, que não tem nada a ver com o x de dentro continua valendo os 50, sem interferir em nada, o let não escreve por cima do let x de fora


//Const
//Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

const Mes = 'Dezembro';
//mes = 'Janeiro'; // erro, tentou modificar o valor
//const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona
//data = 'Janeiro'; // erro

const dataDeNascimeto = {
  data: 13,
  mes: 'dezembro',
}
console.log(dataDeNascimeto);

dataDeNascimeto.ano = 2019;
console.log(dataDeNascimeto);
//Posso adicionar dados, mas não posso alterar o nome da const

//Let
//Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

let anos;
anos = 2018;
anos++;
console.log(anos); // 2019

//let anos = 2020; // erro, redeclarou a variável
