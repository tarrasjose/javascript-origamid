// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksinternos = document.querySelectorAll('a[href^="#"]');
console.log(linksinternos);

function classeAtivo(event) {
  linksinternos.forEach((link) => {
    link.classList.remove('ativo');
  })
  event.currentTarget.classList.add('ativo')
}

linksinternos.forEach((link) => {
  link.addEventListener('click', classeAtivo);
}) 

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *');
console.log(todosElementos);

function handlerElemento(event) {
  //event.currentTarget.remove();
  //event.target.remove();
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', handlerElemento )
})

/*
const todosElementos = document.querySelectorAll('body *');
console.log(todosElementos);

todosElementos.forEach(function(elemento) {
  console.log(elemento);

  function elementoClicado(event) {
    event.preventDefault();
    console.log(event.target);
    //event.target.remove(); //exercicio de baix
  }

  elemento.addEventListener('click', elementoClicado);
})
*/

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

//Resposta no exercicio acima


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function AumentarFonte(event) {
  console.log(event.key);
  if(event.key === 't') {
    //document.body.style.fontSize = '20px';
    document.documentElement.classList.toggle('texto-maior')
    //document.body estou falando com o body e document.documentElement estou falando com o html.
    
  } 
}
window.addEventListener('keydown', AumentarFonte);

