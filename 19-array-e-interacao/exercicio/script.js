// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');
const cursosArray = Array.from(cursos);

const cursosObjeto = cursosArray.map((curso) => {
  console.log(curso);
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;

  return {
    titulo,
    descricao,
    aulas,
    horas
  }
})

console.log(cursosObjeto);












// const cursos = document.querySelectorAll('.curso');
// console.log(cursos);
// const arrayCursos = Array.from(cursos);
// console.log(arrayCursos);

// const obejetosCurso = arrayCursos.map((curso) => {
//   const titulo = curso.querySelector('h1').innerText;
//   const descricao = curso.querySelector('p').innerText;
//   const aulas = curso.querySelector('.aulas').innerText;
//   const horas = curso.querySelector('.horas').innerText;
//   return {
//     titulo : titulo,
//     descricao,
//     aulas,
//     horas
//   }
// })
// console.log(obejetosCurso);





// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresQue100 = numeros.filter((numero) => {
  return numero > 100;
})
console.log(maioresQue100);






// const maiorQue100 = numeros.filter((num) => {
//   return num > 100;
// })
// console.log(maiorQue100);





// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const possuiBaixo = instrumentos.some((item) => {
  return item === 'Baixo';
})
console.log(possuiBaixo);







// const possuiBaixo = instrumentos.some((item) => {
//   return item === 'Baixo';
// })
// console.log(possuiBaixo);





// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorTotal = compras.reduce((acumulador, item) => {
  // console.log(item.preco);
  const numeroLimpo = +item.preco.replace('R$ ','').replace(',', '.');
  console.log(numeroLimpo);
  return acumulador + numeroLimpo;

}, 0)
console.log(valorTotal);






// const valorTotal = compras.reduce((acumulador, item) => {
//   // console.log(item.preco);
//   const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.');
//   console.log(precoLimpo);
//   return acumulador + precoLimpo;
// }, 0)

// console.log(valorTotal);


// let total = 0;
// const valorTotal = compras.map((valor) => {
//   // console.log(valor.preco);
//   valor = +valor.preco.replace('R$ ', '').replace(',', '.');
//   // console.log(valor);
//   total += valor;
 
// })
// console.log(total); //49.42
