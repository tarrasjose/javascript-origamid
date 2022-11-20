// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
console.log(scroll)
scroll += 500;
console.log(scroll)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

var darCredito = (possuiCarro && possuiCasa) ? 'Crédito aprovado.': 'Crédito não concedido.';

console.log(darCredito);

var credito = (possuiCasa && possuiCarro);
console.log(credito);