const animais = document.getElementById('animais');
console.log(animais);
//console.log(animais.innerText); //Retorna o texto

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);
console.log(gridSection[1])//retorna o faq

const contato = document.getElementsByClassName('grid-section contato');
console.log(contato);


const ul = document.getElementsByTagName('ul');
console.log(ul); //retorna todas as ul

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]') //Começa com coloca o ^
console.log(linkInterno.innerHTML);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[0]);
//querySelectorAll, ele é estático, se eu selecionar algo em baixo ele vai continuar com o inicial

//Diferença, o primeiro atualiza, caso acrescente uma classe com o mesmo nome, o segundo não
const gridSectionHtml = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelector('.grid-section');

console.log(gridSectionHtml);
console.log(gridSectionNode);

//Transformando em array, e esse que era um html coletion, que não podia usar o forEach, agora pode

//primeiraUl.classList.add('grid-section');

const arrayGrid = Array.from(gridSectionHtml);


arrayGrid.forEach(function(item, index) {
  console.log(item, index)
})