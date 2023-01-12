const btn = document.querySelector('button');

btn.addEventListener('click', handleClick);

function handleClick() {
  console.log(this);
  // Usando arrow function não dará usando window.setTimeOut, pois ele usa o pai
  setTimeout(() => {
    this.classList.add('active')
  }, 1000)
}

// function espera(texto) {
//   console.log(texto);
// }
// setTimeout(espera, 1000, 'Passou 1s');

setTimeout(() => {
  console.log('Testando');
}, 1000);

// for(let i = 0; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i)
// }
// // assim ele esperará o 1s


// setInterval
let i = 0
const meuLoop = setInterval(() => {
  console.log(i++);
  if(i > 20) {
    clearInterval(meuLoop)
  }
}, 1000)