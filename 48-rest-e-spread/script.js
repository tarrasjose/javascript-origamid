function perimetroForma(lado, totalLados) {
  totalLados = totalLados || 4;
  return lado * totalLados;
}

console.log(perimetroForma(10, 4));
console.log(perimetroForma(10));

// Nova forma permitida de fazer

function perimetroForma2(lado, totalLados = 4) {
  const argArray = Array.from(arguments);
  // console.log(arguments);
  console.log(argArray);
  argArray.forEach(arg => {
    console.log(arg);
  })
  return lado * totalLados;
}
// console.log(perimetroForma2(3));
console.log(perimetroForma2(3, 5));

// Não usar a palavra arguments, nesse caso usamos ...listaArgumentos
function lista(...listaArgumentos) {
  console.log(listaArgumentos);
  listaArgumentos.forEach(item => {
    console.log(item);
  })
}

lista('Uva', 'Maça', 'Pera');

function perimetroForma3(lado, totalLados, ...listaArgumentos2){
  console.log('Lista Argumentos 2 usando ...', listaArgumentos2);
  console.log('usando arguments',arguments);
  totalLados = totalLados || 4;
  return lado * totalLados;
}

console.log(perimetroForma3(2, 3, 59, 'teste', 'oi'));


function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou um ' + premio);
  });
}

anunciarGanhadores('carro', 'Pedro', 'Marta', 'Maria');


//Operador spread

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas,'Pizza',...legumes];

console.log(comidas);



const todosOSNumeros = [4, 5, 20, 10, 30, 2, 33, 5];
const numeroMaximo = Math.max(...todosOSNumeros);
console.log(numeroMaximo);

const botoes = document.querySelectorAll('button');
console.log(botoes);

// const botoesArray = Array.from(botoes);
// console.log(botoesArray);
// Agora pode fazer assim, ao inves do de cima
botoesArrayNovo = [...botoes];
console.log(botoesArrayNovo);
