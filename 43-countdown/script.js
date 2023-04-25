import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown('24 December 2023 23:59:59 GMT-0300');
const tempoParaAnoNovo = new Countdown('31 December 2023 23:59:59 GMT-0300')
// Se a promoção for terminar no horário de Brasília tem que colocar o GMT-0300
// Se caso a hora a ser seguida for a horário local da pessoa, aí não passa o GMT-0300
console.log(tempoParaONatal);
console.log(tempoParaONatal._futureDate.getDay()); //dia
console.log('total de milissegundos até o natal de 2023', tempoParaONatal._timeStampDifença);

console.log(tempoParaONatal._actualDate);

console.log(tempoParaONatal.days);

console.log(tempoParaONatal.hours);

console.log(tempoParaONatal.minutes);

console.log(tempoParaONatal.seconds);

// Tempo para o Natal
//  


// Tempo para o Ano Novo
console.log(tempoParaAnoNovo.total);