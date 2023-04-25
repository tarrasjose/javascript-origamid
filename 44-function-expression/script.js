//Esse é jeito que conhecemos
function somar(a,b) {
  return a + b;
}
console.log(somar(2,3));

//E agora essa:
const dividir = function(a, b) {
  return a / b;
}
console.log(dividir(60,4));

// Arrow Function
// Não recomenda, pois dificulta a leitura
const subtracao = (a, b) => a - b;
console.log(subtracao(10, 7));

const quadrado = a => a * a;
console.log(quadrado(4));

// IIFE - ARROW FUNCTION
// Compiladores ainda transformam modules em IIFE's para manter a compatibilidade com browsers antigos.
const instrumento = 'Violão';

(function() {
  // tem acesso lá fora, mas o que eu faço aqui dentro não influencia o que eu faço lá fora
  const instrumento = 'Guitarra';
  // console.log(instrumento);
})();

console.log(instrumento);

// com arrow function também
const carro = 'Civic';
(() => {
  const carro = 'Corolla';
})();
console.log(carro);