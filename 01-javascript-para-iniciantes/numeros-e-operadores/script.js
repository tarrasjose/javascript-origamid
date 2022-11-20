//OPERADORES ARITMÉTICOS
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

//OPERADORES ARITMÉTICOS (STRINGS)
var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50 CONVERTE PRA NÚMERO E SUBTRAI, SE CONSEGUIR CONVERTER
var multiplicacao = '100' * '2'; // 200 CONVERTE PRA NÚMERO E MULTIPLICA, SE CONSEGUIR CONVERTER 
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)
// DIVISAO CONVERTE PRA NÚMERO E FAZ A DIVISÃO, MAS NESTE CASO NÃO CONSEGUE CONVERTER

//A ORDEM IMPORTA
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

//OPERADORES ARITMÉTICOS UNÁRIOS
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6 Se colocar ++ na frente ele já retornará incrementado
console.log(incremento2); // 6

//POSSUI TAMBÉM O DECREMENTO USANDO O --;

//Operadores Aritméticos Unários
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33  SE NÃO USAR O + NA FRENTE DE IDADE CONCATENA

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1


