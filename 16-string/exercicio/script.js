// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let valorDasTaxas = 0;
let valorDosRecebimentos = 0;

transacoes.forEach((item) => {
  // console.log(item.valor);
  const valorLimpo = +item.valor.replace('R$ ', '');
  // console.log(valorLimpo);
  // console.log(item.descricao.slice(0, 4));
  if(item.descricao.slice(0, 4) === 'Taxa') {
    valorDasTaxas += valorLimpo;
  } else {
    valorDosRecebimentos += valorLimpo;
  }
})

console.log(valorDasTaxas);
console.log(valorDosRecebimentos);




// let somaValores = 0;
// transacoes.forEach((item) => {
//   console.log(item.valor.slice(3, 6));
//   somaValores += Number(item.valor.slice(3, 6));
// })
// console.log('Soma dos valores', somaValores);

// let taxaTotal = 0
// let RecebimentoTotal = 0;
// transacoes.forEach((item) => {
//   const numeroLimpo = +item.valor.replace('R$ ', '');
//   console.log(numeroLimpo);
//   if(item.descricao.slice(0, 4) === 'Taxa') {
//     taxaTotal += numeroLimpo;
//   } else if(item.descricao.slice(0, 4) === 'Rece') {
//     RecebimentoTotal +=numeroLimpo;
//   }
// })

// console.log('Taxa',taxaTotal);
// console.log('Recebimento', RecebimentoTotal);




// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);





// const arrayTransportes = transportes.split(';');
// console.log(arrayTransportes);



// Substitua todos os span's por a's
let html = `<ul>
              <li><span>Sobre</span></li>
              <li><span>Produtos</span></li>
              <li><span>Contato</span></li>
            </ul>`;


html = html.split('span').join('a');
console.log(html);


// const listaHtml = html.replace(/[span]+/g, 'a')
// console.log(listaHtml);

// html = html.split('span').join('a')
// console.log(html);



// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase[frase.length - 1]);
console.log(frase.charAt(frase.length - 1));
console.log(frase.slice(-1));


// console.log(frase[frase.length - 1]);
// console.log(frase.slice(-1));
// console.log(frase.charAt(frase.length - 1));




// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let TotalDeTaxas = 0;

transacoes2.forEach((item) => {
  item = item.trim();
  item = item.toLowerCase();
  item = item.slice(0, 4);
  console.log(item);
  if(item === 'taxa') {
    TotalDeTaxas++;
  }
})

console.log(TotalDeTaxas);



// let TotalDeTaxas = 0;

// transacoes2.forEach((item) => {
//   // console.log(item);
//   item = item.toLowerCase();
//   // console.log(item);
//   item = item.trim();
//   // console.log(item);
//   item = item.slice(0, 4);
//   console.log(item);
//   // item = item.toLowerCase().trim().slice(0,4); poderia fazer assim

//   if(item === 'taxa') {
//     TotalDeTaxas++;
//   }
// })

// console.log(TotalDeTaxas);
