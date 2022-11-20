/*const imgs = document.querySelectorAll('img');
console.log(imgs);

console.log('Separação para entender melhor');

imgs.forEach(function(item, index, array){
  //console.log(item, index, array)
  console.log(item)
});
*/
//FOREACH E ARRAY
//forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.

const titulos = document.getElementsByClassName('titulo');
console.log(titulos); //arraycollection

const titulosArray = Array.from(titulos);
console.log(titulosArray); //já da um array normal

titulosArray.forEach(function(item){
  console.log(item)
})


const imgs = document.querySelectorAll('img');

console.log(imgs);

imgs.forEach((item, index) => {
  console.log(item, index);
})
//se tiver apenas um parametro, pode tirar o parenteses do item por exemplo
imgs.forEach(item => {
  console.log(item)
})
//se não tiver nenhum parametro, precisa passar o parentese
let i = 0;
imgs.forEach(() => {
  console.log(i++);
})
//quando só tem uma linha de código, ele também funciona assim:
imgs.forEach(item => {console.log(item)});