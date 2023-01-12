// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  console.log(item.innerText.length);
  return acumulador + item.innerText.length;
}, 0)
console.log(totalCaracteres);



// const paragrafos = document.querySelectorAll('p');
// const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
//   return acumulador + item.innerText.length;
// }, 0)

// console.log(totalCaracteres);

// //////////////////////////// outro jeito

// const paragrafos = document.querySelectorAll('p');
// // console.log(paragrafos);
// const paragrafosArray = Array.from(paragrafos);
// console.log(paragrafosArray);

// let totalCaract = 0;
// const totalCaracteres = paragrafosArray.map((paragrafo) => {
//   console.log(paragrafo.innerText.length);
//   return totalCaract += paragrafo.innerText.length;
// })
// console.log(totalCaracteres);
// console.log(totalCaract);








// const caracteres = paragrafosArray.reduce((acumulador, item) => {
//   console.log(item.innerText.length);
//   return acumulador + item.innerText.length
// }, 0)

// console.log(caracteres);




// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}

console.log(criarElemento('h1', 'ativo', 'Cursos de programação'));

// function criarElemento(tag, classe, conteudo) {
//   const elemento = document.createElement(tag);
//   classe? elemento.classList.add(classe) : null;
//   conteudo? elemento.innerHTML = conteudo : null;
//   return elemento;
// }

// console.log(criarElemento('h1', 'ativo', 'Bom dia!'));





// function criarElemento(tag, classe, conteudo) {
//   const elemento = document.createElement(tag);
//   classe? elemento.classList.add(classe) : null;
//   conteudo? elemento.innerHTML = conteudo : null;
//   return elemento;
// }

// console.log(criarElemento('li', 'ativo', 'Este é o conteúdo'));





// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

const tituloSecundario = h1Titulo('Clique aqui para começar');
console.log(tituloSecundario);



// const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');
// const cursosJs = h1Titulo('Bom dia!')
// console.log(cursosJs);



