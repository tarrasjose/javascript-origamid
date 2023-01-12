console.log(Number.isNaN(NaN)); //true, não é um número
console.log(Number.isNaN('teste')); //false
console.log(isNaN('teste')); //true

console.log('Number.isNaN() e Number.isInteger();');
// isNaN() é um método de Number, ou seja, não faz parte to protótipo. isInteger() verifica se é uma integral.
console.log(Number.isInteger(10)); //true
console.log(Number.isInteger(10.1)); //false

console.log('Number.parseFloat() e Number.parseInt()');

console.log(parseFloat(99.50)); //99.5
console.log(parseFloat('100 Reais')); //100
console.log(parseFloat('R$ 100')); //NaN


console.log(parseInt(99.55555)); //99
console.log(parseInt('98.50 reais'));

// n.toFixed(decimais)
// Arredonda o número com base no total de casas decimais do argumento.

const preco = 2.99;
console.log(+preco.toFixed()); //3

const preco2 = 1499.49;
console.log(preco2.toFixed()); //1499

const carro = 1000.4555;
console.log(carro.toFixed(2)); //1000.46

//n.toString(radix)
// Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal.

const preco3 = 2.99;
console.log(preco3); //2.99 number
console.log(preco3.toString()); //2.99 string

// n.toLocaleString(lang, options);
// Formata o número de acordo com a língua e opções passadas.

const preco4 = 59.49;
console.log(preco4.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
console.log(preco4.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));

// Math
// É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.
console.log(Math.PI);

// Math.abs(), Math.ceil(), Math.floor() e Math.round()
// abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. ceil() arredonda para cima, retornando sempre uma integral e floor para baixo. round() arredonda para o número integral mais próximo.

console.log(Math.abs(-5.5)); //5.5 retorna o valor absoluto
console.log(Math.abs(-1)); //1

console.log(Math.ceil(4.8334)); //5 arrendonda pra cima
console.log(Math.ceil(4.3)); // 5

console.log(Math.floor(4.99)); //4 arrendonda pra baixo
console.log(Math.floor(4.3)); //4

console.log(Math.round(9.8)); //10 arredonda para o número integral mais próximo
console.log(Math.round(9.1)); //9


// Math.max(), Math.min() e Math.random();
// max() retorna o maior número de uma lista de argumentos, min() o menor número e random() um número aleatório entre 0 e 1.

console.log(Math.max(1, 2, 3)); //3 retorna o maior número de uma lista de argumentos
console.log(Math.min(1, 2, 3)); //1 retorna o menor número

console.log(Math.random() * 10);
console.log(Math.round(Math.random() * 10));

// Gerar um número entre um e outro
//Tem que usar o floor
//Formula Math.floor(Math.random() * (num-max - num-min + 1)) + num-min
console.log(Math.floor(Math.random() * (72 - 70 + 1)) + 70);