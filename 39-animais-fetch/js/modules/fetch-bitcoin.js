export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(bitcoin => {
    // console.log(bitcoin.BRL.sell);
    const btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerText = (1000 /bitcoin.BRL.sell).toFixed(4)
    // para tranformar no valor que você quer é só pegar o número que quer e dividir pelo bitcoin
  }).catch(erro => {
    console.log(Error(erro));
  })
}
