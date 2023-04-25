// Remova o erro
console.log(priceNumber('R$ 99,99'));
// Para esta dar certo tem que colocar acima desse console por exemplo
// const priceNumber = n => +n.replace('R$', '').replace(',', '.');

// Esse remove pois ela vai para o topo do código
function priceNumber(n) {
  return n.replace('R$', '').replace(',','.');
} 

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
const carro = 'Pagero';
(function() {
  const carro = 'gol';
})()
console.log(carro);

// Como podemos utilizar
// a função abaixo.
// const active = callback => callback();

// Essa funcção recebe um callback que é ativado com o retorno dela
function active(callback) {
  return callback();
}

active(function() {
  console.log('Teste de active');
})
