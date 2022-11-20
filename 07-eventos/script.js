const h2s = document.querySelectorAll('h2');
console.log(h2s)

h2s.forEach((h2) => {
  h2.addEventListener('click', () => {
    console.log('clicou')
  })
})

//É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima
const img = document.querySelector('img');

function callback(event) {
  console.log(event);
  console.log('caminho', event.path); //caminho
  console.log('tipo de evento', event.type); //tipo de evento
  console.log('Onde clicou', event.target); //onde o evento ocorreu. onde clicou
  console.log('evento', event.currentTarget) //this, o elemento, aqui o img
}
//usando algum parametro que não importa o que está escrito ali, retorna diversos metodos e propriedas

//img.addEventListener('click', callback);



const animaisLista = document.querySelector('.animais-lista');
//Geralmente utilizam "e" como nome do parâmetro
function callbackLista(event) {
  console.log('event.target', event.target); //em cima do que eu cliquei
  console.log('event.currentTarget', event.currentTarget); //no evento
}

//animaisLista.addEventListener('click', callbackLista);

// Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.

const linkExterno = document.querySelector('a[href^="https"]');
console.log(linkExterno);

function previnePadraoBrowser (event) {
  event.preventDefault(); //previne o comportamento padrao do browser, o link por ex: não irá abrir.
  console.log('Clicou no link externo');
}

linkExterno.addEventListener('click', previnePadraoBrowser);

// DIFERENTES EVENTOS
// Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também.

const h1 = document.querySelector('h1');

function handEvent(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', handEvent);
//h1.addEventListener('mouseenter', handEvent); //Quando entra o mouse
//h1.addEventListener('mouseleave', handEvent);
//h1.addEventListener('mousemove', handEvent); //Este cada pequeno movendo que em cima do event e ele atualiza, isso é pessimo para pois são disparados dirvesos eventos, isso para performace é horrivel
//window.addEventListener('scroll', handEvent); //quando usa o scroll
window.addEventListener('resize', handEvent); //quando mexe no tamanho da janela
window.addEventListener('keydown', handEvent); //que é o de apertar alguma tecla do teclado


//Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.

function handleKeyBoard(event) {
  console.log(event.key);
  if(event.key === 'Escape') {
    document.body.classList.toggle('fullScreen');
  }
}

window.addEventListener('keydown', handleKeyBoard);

function dark(event) {
  console.log(event.key);
  if(event.key === 'Shift') {
    document.body.classList.toggle('dark');
  }
}

window.addEventListener('keydown', dark);


const imagens = document.querySelectorAll('img');

function handleImg(event) {
  console.log(event.target.getAttribute('alt'))
}

imagens.forEach((imagem) => {
  console.log(imagem);
  imagem.addEventListener('click', handleImg)
})