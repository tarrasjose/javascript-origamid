/*
var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

*/
var nome = "André";
console.log(typeof nome);

var idade = 23;
console.log(typeof idade);

var sobrenome = "Rafael";

var nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);
// Se quiser dar um espaço sem dar espaço nome fica assim:
nomeCompleto = nome + " " + sobrenome
console.log(nomeCompleto);

/*
ASPAS DUPLAS, SIMPLES E TEMPLATE STRING

'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
"JavaScript é "super" fácil"; // Inválido
*/

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String

