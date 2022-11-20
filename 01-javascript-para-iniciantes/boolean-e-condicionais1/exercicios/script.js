// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 30;
var idadePrimo = 32;

if(minhaIdade < idadePrimo) {
  console.log("É menor");
} else if(minhaIdade === idadePrimo) {
  console.log("É igual");
} else {
  console.log("É maior")
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
//R:3
console.log('Expressão: '+expressao);
//Retornou o ultimo verdadeiro
//&& ele sempre vai retornar o ultimo valor verdadeiro que ele achar ou o primeiro valor falso, encontrando o falso já retorna ele.

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
  console.log("Brasil tem mais habitantes do que a China");
} else {
  console.log("China tem mais habitantes do que o Brasil")
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
//R: falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
//'Gato' && 'Cão'