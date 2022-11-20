var videoGames = ['Ps4', 'Ps5','3DS', 'Xbox-one'];
console.log(videoGames);
console.log(videoGames[0]);

videoGames.pop();//Remove o último item e retorna ele
console.log(videoGames.length);
videoGames.push('Xbox-s');
console.log(videoGames);

for(var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

for(var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

var i = 0;
while(i < videoGames.length) {
  console.log(videoGames[i]);
  i++
}

console.log("Se for igual um item da lista, quebra um loop com break");

for(var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i])
  if(videoGames[i] === "3DS"){
    break;
  }
}
console.log("forEach")
var frutas = ['Banana', 'Laranja', 'Maça', 'Uva', 'Melância', 'Abacaxi'];

frutas.forEach(function(item){
  console.log(item);
})
console.log("");

frutas.forEach(function(fruta, index, array){
  console.log(fruta, index, array);
})