// Verificar se existe
// O typeof retorna o tipo de dado. Caso esse dado não exista ou não tenha sido definido, ele irá retornar undefined. Ou seja, quando não for undefined quer dizer que existe.
console.log(typeof Array);
console.log(typeof Array.from);
console.log(typeof Array !== "undefined");
console.log(typeof sfs !== "undefined");

if(typeof Array !== "undefined") {
  console.log('Existe');
} else {
  console.log('Não existe');
}