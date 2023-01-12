// Mude a cor da tela para azul e depois para vermelho a cada 2s.
function mudarClasse() {
  document.body.classList.toggle('active');
}

// setInterval(mudarClasse, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector('.botao-inciar');
const pausarResetar = document.querySelector('.botao-pausar');
const tempo = document.querySelector('.tempo');

let contador = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerText = contador++
  }, 300)
  iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute('disabled', '');
}

function resetarTempo() {
  tempo.innerText = 0;
  contador = 0;
}

iniciar.addEventListener('click', iniciarTempo);
pausarResetar.addEventListener('click', pausarTempo);
pausarResetar.addEventListener('dblclick', resetarTempo);