// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado) {
  return !!dado;
}
console.log(isTruthy(0));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}
console.log(perimetroQuadrado(5));//////////////////

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
  /*var firstName = nome;
  var lastName = sobrenome;

  var completeName = `${firstName} ${lastName}`
  
  return completeName;
  */
}

console.log(nomeCompleto("Tárras José", "de Souza")); ///////////////


// Crie uma função que verifica se um número é par
function verificaPar(numero) {
  if(numero % 2 === 0) {
    console.log(`${numero} é um número par.`)
  } else {
    console.log(`${numero} é um número impar.`)
  }
}
verificaPar(10);/////////////////

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDoDado(dado) {
  return typeof(dado);
  /*
  var tipo = typeof(dado);
  return tipo;
  */
}
console.log(tipoDoDado("oi"));///////////

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", function() {
  console.log("Tárras José de Souza")
})
//Não funcionou antes, simplesmente porque não tinha nada para dar scroll no html

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));/////////////
console.log(jaVisitei(20));//////////////
