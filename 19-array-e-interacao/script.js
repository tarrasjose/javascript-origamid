///////////////////Array
console.log('forEach()');
// [].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).
const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach((item, index, array) => {
  console.log(item, index, array);
})

carros.forEach((item, index, array) => {
  // Qualquer mudança que fizer no array, muda a array de verdade. ex:
  array[index] = item.toUpperCase();
})

console.log(carros);
// Modificar a Array Original
// O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original.
carros.forEach((item, index, array) => {
  array[index] = 'Carro ' + item;
})
console.log(carros);

console.log('Arrow Function');

const li = document.querySelectorAll('li');
console.log(li);

// Quando só retorna um pode omitir as chaves
li.forEach(i => i.classList.add('ativo'));

// Mas o ideal é usar entre os parenteses
//Se quiser usar o index
li.forEach((i, index) => {
  i.classList.add(('azul' + index))
})

// Mas o melhor para utilizarmos isso, é usando o proximo

// [].map()
// [].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.

const carros1 = ['Ford', 'Fiat', 'Honda'];
console.log(carros1);

const teste = carros1.forEach((item) => {
  return item.toUpperCase();
})
// Com forEach retorna undefined
console.log(teste);

const teste2 = carros1.map((item) => {
  return item.toUpperCase();
})
//Com map
console.log(teste2);
// Lembrando que a array principal segue normal
console.log(carros1);

// Criar uma const com os valores de numeros multiplicado por 2
const numeros = [2, 4, 5, 6, 78];

// Não precisou usar o return
const numerosX2 = numeros.map(num => num * 2)

const numerosX3 = numeros.map(num => {
  // Aqui tem que usar o return
  return num * 3
})

console.log(numerosX2);
console.log(numerosX3);

// [].map() com Objetos
// Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]


const tempoAula = aulas.map(aula => aula.min);
console.log(tempoAula);

total = 0;
const totalMinutos = tempoAula.map(min => total = min + total)
console.log(total);

// Dá pra fazer assim
function nomeAulas(aula) {
  return aula.nome;
}
const arrayNomeAulas = aulas.map(nomeAulas);
console.log(arrayNomeAulas);

// Seria a mesma coisa de fazer assim:
const arrayNomeAulas2 = aulas.map(function (aula) {
  return aula.nome;
});
console.log(arrayNomeAulas2);

//Poderia assim também:
const NomeAulas = function(aula) {
  return aula.nome
}

const arrayNomeAulas3 = aulas.map(nomeAulas);
console.log(arrayNomeAulas3);

// Ou assim
const nomeAulas2 = aula => aula.nome;
//Serie a mesma coisa esse de baixo
// const nomeAulas2 = function(aula) {
//   return aula.nome;
// }

const arrayNomeAulas4 = aulas.map(nomeAulas2);

console.log(arrayNomeAulas4);

// [].reduce()
// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.
const aulas2 = [10, 25, 30];

const total2 = aulas2.reduce((acumulador, item, index, array) => {
  console.log(acumulador, item, index, array);
  return acumulador + item;
}, 0)

console.log(total2);
// Se não colocar zero no final, ele não vai fazer a primeira interação
//ex de como é usando o zero ou não:

// Reduce Passo a Passo 1
// O primeiro parâmetro do callback é o valor do segundo argumento passado no reduce(callback, inicial) durante a primeira iteração. Nas iterações seguintes este valor passa a ser o retornado pela anterior.
// const aulas = [10, 25, 30];

// // 1
// aulas.reduce((0, 10) => {
//   return 0 + 10;
// }, 0); // retorna 10

// // 2
// aulas.reduce((10, 25) => {
//   return 10 + 25;
// }, 0); // retorna 35

// // 3
// aulas.reduce((35, 30) => {
//   return 35 + 30;
// }, 0); // retorna 65

// Reduce Passo a Passo 2
// Se não definirmos o valor inicial do acumulador, ele irá pular a primeira iteração e começara a partir da segunda. Neste caso o valor do acumulador será o valor do item da primeira iteração.
// const aulas = [10, 25, 30];

// // 1
// aulas.reduce((10, 25) => {
//   return 10 + 25;
// }) // retorna 35

// // 2
// aulas.reduce((35, 30) => {
//   return 35 + 30;
// }) // retorna 65

////////////////////////////////////

// Maior Valor com [].reduce()

const numeros2 = [10, 25, 60, 5, 35, 10];

const maiorNumero = numeros2.reduce((anterior, atual) => {
  if(anterior > atual) {
    return anterior;
  } else {
    return atual;
  }
})

console.log(maiorNumero);

const maiorNumero2 = numeros2.reduce((anterior, atual) => {
  return anterior > atual ? anterior : atual;
})

console.log(maiorNumero2);

// Podemos retornar outros valores

const aulas3 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulas.reduce((acumulador, aula, index) => {
  console.log(aula.nome);
  acumulador[index] = aula.nome;
  console.log(acumulador);
  return acumulador;
}, {})
// Se não tivesse colocado as chaves não pegaria o primeiro
console.log(listaAulas);

// [].reduceRight()
// Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.

const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
console.log(frutasRight);

const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);
console.log(frutasLeft);

// [].some()
// [].some(), se pelo menos um return da iteração for truthy, ele retorna true.
const frutas2 = ['Banana', 'Pêra', 'Uva'];

const temUva = frutas2.some((fruta) => {
  return fruta === 'Uva'
});
console.log(temUva);

// [].every()
// [].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.

// !!"" Verificar se é true

const frutas3 = ['Banana', 'Pêra', 'Uva', ''];

const every = frutas3.every((fruta) => {
  console.log(fruta);
  return fruta;
})
// Como tinha uma string vazia retornou false
console.log(every);


const numeros3 = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros3.every(function(n) {
  return n > 4;
})
console.log(maiorQue3); //true, pois todos os numeros são maiores que 4

// [].find() e [].findIndex()
// [].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.
const frutas4 = ['Banana', 'Pêra', 'Uva', 'Maçã'];

const buscaUva = frutas.findIndex((item) => {
  return item === 'Uva';
})
console.log(buscaUva); //findIndex retorna o index, aqui 2

const numeros4 = [6, 43, 22, 88, 101, 29];

const buscaMaior45 = numeros4.find((num) => {
  return num > 45;
})
console.log(buscaMaior45); //88 find já retorna o valor, o primeiro que encontrar, ele retorna


// [].filter()
// [].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.

const frutas5 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const arrayLimpa = frutas5.filter((item) => {
  return item;
})

console.log(arrayLimpa); //['Banana', 'Uva', 'Maçã'] retornou estes, pois só eles são verdadeiros


const numeros5 = [6, 43, 22, 88, 101, 29];

const buscaMaior25 = numeros5.filter((num) => {
  return num > 25;
}) 
console.log(buscaMaior25); //[43, 88, 101, 29]

const aulas4 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const aulasMaiores15 = aulas4.filter((aula) => {
  return aula.min > 15;
})

console.log(aulasMaiores15);