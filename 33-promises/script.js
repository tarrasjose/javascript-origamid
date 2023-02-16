// const promessa = new Promise(function(resolve) {
//   resolve()
// });

// console.log(promessa);

///////////////////////////////////////////////////

// const promessa = new Promise((resolve, reject) => {
//   let condicao = false;
//   if(condicao) {
//     setTimeout(() => {
//       resolve({nome: 'André', idade: 28});
//     }, 1000)
//   } else {
//     reject(Error('Um erro ocorreu na promise'))
//   }
// });

// const retorno = promessa
// .then(resolucao => {
//   console.log(resolucao);
//   resolucao.profissao = 'Designer';
//   return resolucao;
// })
// .then(resolucao => {
//   console.log(resolucao);
// })
// .catch(rejeitada => {
//   // console.log('CATCH');
//   console.log(rejeitada);
// })
// .finally(() => {
//   console.log('Acabou');
// })

// console.log(retorno);

///////////////////////////////////////////////////////

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuário Logado')
  }, 1000)
})

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados Carregados')
  }, 1500)
})

const carregouTudo = Promise.all([login, dados]);
console.log(carregouTudo);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
})