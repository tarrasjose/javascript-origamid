// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');

btnCep.addEventListener('click', handleClick);
// keyup não precisaria clicar em buscar

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
  // console.log(event);
}

function buscaCep(cep) {
 fetch(`https://viacep.com.br/ws/${cep}/json/`)
 .then(response => response.text())
 .then(body => {
  resultadoCep.innerText = body
 })
}



// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const bitcoinDisplay = document.querySelector('.bitcoin');

function fetchBitcoin() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(bitcoinJson => {
    console.log(bitcoinJson.BRL.buy);
    bitcoinDisplay.innerText = ('R$ ' + bitcoinJson.BRL.buy).replace('.', ',')
  })
}

// setInterval(fetchBitcoin, 500)

fetchBitcoin()



// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnproxima = document.querySelector('.proxima');
const paragrafoPiada = document.querySelector('.piada');

function puxarPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(r => r.json())
  .then(piada => {
    console.log(piada.value);
    paragrafoPiada.innerText = piada.value;
  })
}

btnproxima.addEventListener('click', puxarPiada);

puxarPiada();