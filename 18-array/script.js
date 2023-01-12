// Arrays
// Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
console.log(instrumentos[2]);
const precos = [49, 99, 69, 89];
console.log(precos[0]);

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];
console.log(dados[0]);
console.log(dados[2]);

console.log('array dentro de outra array', dados[1]);
console.log('array dentro de outra array', dados[1] [2]);
console.log('array dentro de outra array', dados[1] [2].cor);
console.log('array dentro de outra array', dados[1] [2].preco);

dados[2]('Ford');
dados[1][2].cor; // azul


const carros = new Array('Ford', 'Fiat', 'Honda');
console.log(carros);
carros[2] = 'Ferrari'; /*Aqui ele substitui o Honda */
carros[3] = 'Hyndai'; /*Aqui ele acrescenta hyunday */
console.log(carros);
console.log(carros[2]);

console.log(carros.length); 
// Tamanho da Array

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li); //Transformar li em array
console.log(li);
console.log(arrayLi);

const obj = {
  0: 'Andre',
  1: 'Rafael',
  2: 34,
  length: 3,
}
console.log(obj);

const objArray = Array.from(obj);
console.log(objArray);


// Array.isArray()
// Verifica se o valor passado é uma array e retorna um valor booleano.

console.log(Array.isArray(li));
console.log(Array.isArray(objArray));

// Array.of(), Array() e new Array()
// A palavra chave new não é necessária para utilizar o construtor Array.

Array.of(10); // [10]
const array1 = Array.of(10); //Cria a Array com o 10
console.log(array1);

Array.of(1,2,3,4); // [1,2,3,4]
const array2 = Array.of(1, 2, 3, 4); //Cria a array com 1,2,3,4
console.log(array2);

new Array(5); // [,,,,]
const array3 = new Array(5); //Cria a array com 5 espaços vazios
console.log(array3);

Array(5); // [,,,,]
const array4 = Array(5); //Cria a array com 5 espaços vazios
console.log(array4);

Array(1,2,3,4); // [1,2,3,4]
const array5 = Array(1, 2, 3, 4); //Cria a array com 1, 2, 3 e 4
console.log(array5);

// Propriedades e Métodos do Prototype
// [].length retorna o tamanho da array.

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[0].length);

console.log(frutas[2][0].length); //Uva Roxa 8 caracteres com espaço

// Métodos Modificadores [].sort()
// Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original. [].sort() organiza a pelo unicode.

const instrumentos1 = ['Guitarra', 'Baixo', 'Violão'];
console.log(instrumentos1);
console.log(instrumentos1.sort()); //Ordem alfabetica

const idades = [32,21,33,43,1,12,8];
console.log(idades);
console.log(idades.sort()); //sort() já não consegue organizar os números, pois ele vai de caracter em caracter e coloca em ordem, 8 por ser o maior primeiro caracter ficou em ultimo


// [].unshift() e [].push()
// [].unshift() adiciona elementos ao início da array e retorna o length da mesma. [].push() adiciona elementos ao final da array e retorna o length da mesma.

const carros1 = ['Ford', 'Fiat', 'VW'];
carros1.unshift('Honda', 'Kia'); // 5
// O unshift coloca esses dois no inicio da array e retorna o novo tamanho desta array
console.log(carros1);; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros1.push('Ferrari'); // 6
// push coloca no final e retorna o novo tamanho desta array
console.log(carros1);; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];


// [].shift() e [].pop()
// [].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() remove o último elemento da array e retorna o mesmo.

const moveis = ['Sofá', 'Cama', 'Estante'];
console.log(moveis);
console.log(moveis.pop()); //Tira o ultimo elemento e retorna o mesmo
console.log(moveis);

console.log(moveis.shift()); //Tira o primeiro elemento e retorna o mesmo
console.log(moveis);


// [].reverse()
// [].reverse() inverte os itens da array e retorna a nova array.

const animais = ['Cachorro', 'Passarinho', 'Coelho'];
console.log(animais);
console.log(animais.reverse()); //Este altera array, quando for acessar a array outra vez estará na nova ordem.
console.log(animais);

// [].SPLICE()
// [].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).
const carros2 = ['Ford', 'Fiat', 'VW', 'Honda'];
console.log(carros2);

console.log(carros2.splice(2, 1, 'Ferrari')); //vw
console.log(carros2);

console.log(carros2.splice(1, 0, 'Fusca')); //Retorna array vazio, pois removeu 0;
console.log(carros2); //Como não removeu aumentou o número e empurrou todos a frente para um index acima

// [].copyWithin()
// [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(0, 2, 4));
// ['Item1', 'Item2', 'Item1', 'Item2']

console.log('Usando Negativo');
console.log(['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1));
// ['Item1', 'Item2', 'Item3', 'Item1']

// [].fill()
// [].fill(valor, inicio, final) preenche a array com o valor, do início até o fim.
console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana'));
// ['Banana', 'Banana', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
// ['Item1', 'Item2', 'Banana', 'Banana']

console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3));
// ['Item1', 'Banana', 'Banana', 'Item4']


// Métodos de Acesso [].concat()
// Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. [].concat() irá concatenar a array com o valor passado.
const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];

const transportesConcat = transporte1.concat(transporte2);
console.log(transportesConcat);
// As outras continuam igual, só foi criado uma nova juntando as duas
const transportesConcat2 = [].concat(transporte1, transporte2);
console.log(transportesConcat2);
// Essa faz a mesma coisa que a de cima

const transportesConcat3 = [].concat(transporte1, transporte2, 'Van', 'Ônibus')
console.log(transportesConcat3);

// [].includes(), [].indexOf() e [].lastIndexOf()
// [].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último.
const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];
console.log(linguagens.includes('js')); //true
console.log(linguagens.indexOf('js')); //2  Se não tivesse na lista voltaria -1.

console.log(linguagens.lastIndexOf('js')); //5 Como tem dois js na lista usando lastIndexOf retorna o ultimo

// [].join()
// [].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.
const linguagens2 = ['html', 'css', 'js', 'php', 'python'];
console.log(linguagens2);
console.log(linguagens2.join()); //'html,css,js,php,python'
console.log(linguagens2.join('')); //htmlcssjsphppython Usando a string vazia sem espaço, ele junta tudo.
console.log(linguagens2.join('-_-'));

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
htmlString = htmlString.join('h1');
console.log(htmlString);

// [].slice()
// [].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.
const linguagens1 = ['html', 'css', 'js', 'php', 'python'];
console.log(linguagens1.slice(1));  //'css', 'js', 'php', 'python Este quer dizer que a partir do 1, ele vai retornar
console.log(linguagens1.slice(2, 4)); //'js', 'php' Deixando mais claro, ele começa retornando o 2, retorna 3 e quando chega no 4 ele para e não retorna o 4.



// Clonando 
const linguagens3 = ['html', 'css', 'js', 'php', 'python'];
console.log(linguagens3);
const cloneLinguagens3 = linguagens3; //Não é assim que se clona, pois assim funcionará como se fosse a outra, se excluir em 1 também excluírá no outro
console.log(linguagens3.pop());
console.log(linguagens3);
console.log(cloneLinguagens3);
// O certo é assim:
const cloneLinguagens3Correto = linguagens3.slice();
console.log(cloneLinguagens3Correto);
// Vamos excluir mais um do linguagens3 pra testar
linguagens3.pop();
console.log(linguagens3); //Aqui já excluiu
console.log(cloneLinguagens3Correto); //Mas aqui no clone feito de forma correta não excluiu