export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  // split para transformar em array
  // map(Number) um macete para transformar em número
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)
  
  
  // console.log(diasSemana);
  // console.log(horarioSemana);
  
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  // console.log(diaAgora);
  const horarioAgora = dataAgora.getHours();
  // console.log(horarioAgora);
  
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  // console.log(semanaAberto);
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);
  
  if(semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }

}




// const agora = new Date();
// console.log(agora);
// console.log(agora.getDate()); // data de hoje
// console.log(agora.getDay()); // 5 sexta
// console.log(agora.getMonth()); // 0 janeiro

// const futuro = new Date('dec 25 2023 23:59');
// console.log(futuro);

// // dias que faltam, se quiser em horas é só remover o 24, 
// // ficando 60(min) * 60(seg) * 1000(mili) de milissegundos
// function transformarDias(tempo) {
//   return tempo / (24 * 60 * 60 * 1000);
// }

// const diasAgora = transformarDias(agora.getTime());
// const diasFuturo = transformarDias(futuro.getTime());

// console.log(diasFuturo - diasAgora);
// console.log(Math.floor(diasFuturo - diasAgora));
