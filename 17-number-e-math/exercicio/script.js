// Retorne um número aleatório
// entre 1050 e 2000

const numeroAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050)
console.log(numeroAleatorio);



// let maxNumero = 2000;
// let minNumero = 1050
// console.log(Math.floor(Math.random() * (maxNumero - minNumero + 1)) + minNumero);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
console.log(numeros);

const arrayNumeros = numeros.split(',')
console.log(arrayNumeros);

const maiorNumero = Math.max(...arrayNumeros);
console.log(maiorNumero);

// const arrayNumeros = numeros.split(',')

// const maiorNumero = Math.max(...arrayNumeros); //Esses 3 pontinhos pega cada item da array e vai passando em cada item, ex de como ele vai passar: arrayNumeros[0], arrayNumeros[1], arrayNumeros[3] e assim por diante e no final por vai dar o Math.max
// console.log(maiorNumero);




// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];
console.log(listaPrecos);

function limparPreco(preco) {
  preco = +preco.toUpperCase().trim().replace('R$ ', '', ).replace(',', '.');
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco);
})

console.log(soma.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));




// function limparPreco(preco) {
//   preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
//   preco = +preco.toFixed(2);
//   console.log(preco);
//   return preco;
// }

// let soma = 0;
// listaPrecos.forEach((preco) => {
//   soma += limparPreco(preco)
// })
// console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));


// limparPreco(listaPrecos[0])