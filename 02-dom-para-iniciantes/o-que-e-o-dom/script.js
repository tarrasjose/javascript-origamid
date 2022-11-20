//window.alert('oi');

const href = window.location.href;
console.log(href);
if(href === 'http://127.0.0.1:5500/o-que-e-o-dom/index.html') {
  console.log('É igual!')
}
console.log(document.body);

const titulo = document.querySelector('h1');


console.log(titulo.classList);
const tituloClasses = titulo.classList;
console.log(titulo.classList[0]);
console.log(titulo.classList[1]);



titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;


titulo.addEventListener('click', function(){
  console.log('clicou em', titulo.innerText)
})

//OUTRA FORMA 

function callback() {
  console.log('Teste 2 ok');
}
titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo



