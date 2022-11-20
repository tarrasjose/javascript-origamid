// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilGanhouCopa = [1959, 1962, 1970, 1994, 2002];
console.log(brasilGanhouCopa);

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(var i = 0; i < brasilGanhouCopa.length; i++) {
  console.log(`O Brasil ganhou a copa de ${brasilGanhouCopa[i]}`)
}


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if(frutas[i] === 'Pera') {
    break;
  }
}
console.log("")
frutas.forEach(function(fruta){
  console.log(fruta)
})
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

//var ultimaFruta = frutas[4];
//console.log(`A última fruta é ${ultimaFruta}`);

var ultimaFruta = frutas[frutas.length -1];
console.log(`A última fruta do array é a ${ultimaFruta}`)

