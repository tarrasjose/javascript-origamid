// Crie uma função que verifique
// corretamente o tipo de dado
function verificarDado(dado) {
  return Object.prototype.toString.call(dado);
}

console.log(verificarDado(''));
console.log(verificarDado([]));



// function verificarDado(dado) {
//   return console.log(Object.prototype.toString.call(dado));
// }

// const numeros = [34, 4, 5];

// verificarDado(numeros);
// verificarDado({});
// verificarDado('')

////////////////////




// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
 const quadrado = {};
 Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  }
 })
 delete quadrado.lados;
console.log(quadrado);


// const quadrado = {};
// Object.defineProperties(quadrado, {
//   lados: {
//     value: 4,
//     enumerable: true,
//   }
// })
// quadrado.lados = 10;

// console.log(quadrado);

/////////////////////////

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}
Object.freeze(configuracao);
configuracao.width = 10;
console.log(configuracao);
// Object.freeze(configuracao);


// Object.freeze(configuracao); //Não deixa fazer qualquer modificação
// delete configuracao.width;
// delete configuracao.height;
// console.log(configuracao);

///////////////////////////////////

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));



// console.log(Object.getOwnPropertyNames(String.prototype));

// console.log(Object.getOwnPropertyNames(Array.prototype));