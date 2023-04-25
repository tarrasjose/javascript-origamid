const carro = {
  marca: 'Honda',
  ano: 2018
}

// console.log(carro.marca);
// const marca = carro.marca;
// const ano = carro.ano;
// console.log(marca);
// console.log(ano);

const {marca, ano} = carro;
console.log(marca);
console.log(ano);


const cliente = {
  nome: 'André',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['videos JS, Video HTML']
    },
    fisicas: {
      cadernos: ['Cadernos 1']
    }
  }
}

// da forma normal teria que acessar assim:
console.log(cliente.compras.digitais.livros);

//Agora:
// const {livros, videos} = cliente.compras.digitais;
// console.log(livros);
// console.log(videos);

// pode aninhar também
const {digitais, fisicas, digitais: {livros, videos}} = cliente.compras;
console.log(digitais);
console.log(livros);


const cliente2 = {
  nome: 'André',
  compras: 10,
}

const {nome: nomeAndre} = cliente2;
console.log(nomeAndre);


const frutas = ['Banana', 'Uva', 'Morango'];
console.log(frutas[0]);

const [primeira, segunda, terceira] = frutas;
console.log(segunda);


// function handleKeyboard(event) {
//   console.log(event.key);
// }

function handleKeyboard({key, keyCode}) {
  console.log(key);
  console.log(keyCode);
}

document.addEventListener('keyup', handleKeyboard);