const h1 = document.querySelector('h1');
console.log(h1.innerHTML);

h1.innerHTML = '<p>Novo título</p>' //Ele colocar dentro do conteúdo, no caso aqui ele colocou o p com o novo titulo dentro do h1
//h1.outerHTML = '<p>Novo título</p>' //Já o outerHTML ele subtstitui, o h1 tranformou realmente em um paragrafo

const animaisDescricao = document.querySelector('.animais-descricao');
//console.log(animaisDescricao.innerText);

const animaisLista = document.querySelector('.animais-lista');
console.log(animaisLista.parentElement); //pai é a section
console.log(animaisLista.parentElement.parentElement); //o pai do pai é o body

console.log(animaisLista.nextElementSibling.nextElementSibling); // esse pega o proximo que está logo abaixo dele, no caso a div .animais-descricao
console.log(animaisLista.previousElementSibling); //Este vai pegar o anterior, no caso aqui o h1

console.log(animaisLista.children);
console.log(animaisLista.children[animaisLista.children.length - 1]); //acesso o ultimo que é o leao
//outra forma é :
console.log(animaisLista.querySelector('li:last-child')); // Também retorna o ultimo item da lista

console.log(animaisLista.childNodes); //Esse busca cada detalhe inclusive comentarios

console.log(animaisLista.previousSibling); //Vem o espaço, se tirar o espaço virá o h1

const menu = document.querySelector('.menu')
const contato = document.querySelector('.contato');
const mapa = document.querySelector('.mapa');

contato.insertBefore(menu, mapa)
//o primeiro é o pai geral, onde vai inserir, no caso o contato.
//depois o que você quer mover para lá, vou mover pra lá o menu principal.
// e o terceiro é o elemento que vou colocar antes dele, no caso vou colocar antes do mapa que tem que ser filho do contato no caso e é.

const dados = document.querySelector('.dados');

animaisLista.appendChild(dados) //Os dados foi colocado como o filho do animaisLista, no caso as fotos dos animais

const rodape = document.querySelector('.copy');
const rodape__paragrafo = document.querySelector('.copy p')
const animalTitulo = document.querySelector('.animais-descricao h2')

//rodape.removeChild(rodape__paragrafo) 
rodape.replaceChild(animalTitulo, rodape__paragrafo);

const novoH1 = document.createElement('h1');
const animais = document.querySelector('.animais');
novoH1.innerText = 'oi';
novoH1.classList.add('titulo')
animais.appendChild(novoH1)
console.log(novoH1);
console.log(animaisLista)

const cloneAnimaisLista = animaisLista.cloneNode(true); //Neste caso foi clonado o const animaisLista lá de cima, e o true ou false se que clonar também os filhos
console.log(cloneAnimaisLista);

contato.appendChild(cloneAnimaisLista); //Neste caso clonei o animaisLista e coloquei o clone no contato, o primeiro continuando lá em cima e o clone aqui em baixo, sem alterar o animaisLista lá de cima
