const comida = 'Pizza';
console.log(comida);
console.log(comida.length);

const liquido = new String('Água');
console.log(liquido)

const frase = 'A melhor comida';
console.log(frase[frase.length]) //undefined
console.log(frase[frase.length - 1]); //a

// Outra forma usando charAt

console.log(frase.charAt(0));
console.log(frase.charAt(frase.length - 1)); 

// Concat

const produto = 'Carne ';
const promocao = 'está em promoção.';

const fraseFinal = produto.concat(promocao, ' Aproveite!', ' Teste colocando mais coisa e concatenando');

console.log(fraseFinal);

// includes
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';
console.log(listaFrutas.includes(fruta)); //true
// A partir do index...
console.log(listaFrutas.includes(fruta, 11)); //false
console.log(fruta.includes(listaFrutas)); //false

// STR.ENDSWITH(SEARCH) E STR.STARTSWITH(SEARCH)
// Começa com ou termina com
console.log(fruta.startsWith('Ba')); //true
console.log(fruta.startsWith('ba')); //false

console.log(fruta.endsWith('na'));//true
console.log(fruta.endsWith('Na')); //false

// STR.SLICE(START, END)
// Corta a string de acordo com os valores de start e end.
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3)) //Dep
console.log(transacao1.slice(12)) //cliente, corta os primeiros doze caracteres
console.log(transacao1.slice(-4)); //corta todos, menos os ultimos 4 caracteres
console.log(transacao1.slice(3, 6))// ósi, começou do 3 e foi até o 6


// str.substring(start, end)

const linguagem = 'JavaScript';
console.log(linguagem.substring(0, 3));
console.log(linguagem.substring(-3)); //Ele não funciona bem no negativo, volta inteiro


// str.indexOf(search) e str.lastIndexOf(search)
// Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.

const instrumento = 'Guitarra';
console.log(instrumento.indexOf('t')); //Retorna o primeira que encontrar
console.log(instrumento.lastIndexOf('a')); //Retornou o ultimo a que aparece

// str.padStart(n, str) e str.padEnd(n, str)

const preco = 'R$ 99,00';

console.log(preco.padStart(20)); //Colocou espaço antes
console.log(preco.padStart(20,'.'));

console.log(preco.padEnd(20)); //Colocou vinte espaço antes
console.log(preco.padEnd(20,'.'));

console.log('Igualando o tamanho dos números');
const listaPrecos = ['R$ 99','R$ 199','R$ 12000'];

listaPrecos.forEach((item) => {
  console.log(item.padStart('10', '*'));
})

// STR.REPEAT(N)
// Repete a string (n) vezes.
const frase2 = 'tá';
console.log(frase2.repeat(10));;

// str.replace(regexp|substr, newstr|function)
// Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
console.log(listaItens);
listaItens = listaItens.replace('Camisas', 'shirts');
console.log(listaItens);
listaItens = listaItens.replace(/[ ]+/g, ', '); //Vamos aprender mais pra frente
console.log(listaItens);

let preco1 = 'R$ 1200.43';
console.log(preco1); //R$ 1200.43
preco1 = preco1.replace('.',',')
console.log(preco1); //R$ 1200,43

// str.split(padrao)
// Divide a string de acordo com o padrão passado e retorna uma array.

console.log(listaItens);
const arrayLista = listaItens.split(',');
console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
console.log(htmlArray);

const htmlNovo = htmlArray.join('section');
console.log(htmlNovo);


// str.toLowerCase() e str.toUpperCase()
// Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1 === 'feminino'); //Vai dar false

// Uma forma de eliminar o erros é tranformar em minuscula, o que o usuario digitar

console.log(sexo1.toLowerCase() === 'feminino'); //true

console.log(sexo3.toLowerCase() === 'feminino'); //true

// str.trim(), str.trimStart(), str.trimEnd()
// Remove espaço em branco do início ou final de uma string.

const valor = '  R$ 23.00   ' 
console.log(valor.trim()); //tira os espaços do inicio e final
console.log(valor.trimEnd()); //tira espaço do final
console.log(valor.trimStart()); //tira espaço do inicio
