// debugger;



// let item1 = 1;
// function funcao1() {
//   let item2 = 2;
//   console.log('função 1 tem acesso:',item1, item2);
//   function funcao2() {
//     let item3 = 3;
//     console.log('função 2 tem acesso:',item1, item2, item3);
//   }
//   funcao2();
//   // Como função2 foi criada aqui dentro só tem acesso aqui dentro
// }
// funcao1();


// func1, possui acesso à
// item1 e item2

// func2, possui acesso à
// item1, item2 e item3


function contagem() {
  let total = 0;
  // posso retornar a função direto
  return function incremento() {
    total++;
    console.log(total);
    // vai ficar na clojure o numero do total e na proxima ativação da function vai adicionar mais um no total
  }
}
const ativarIncremento = contagem();
ativarIncremento();
ativarIncremento();