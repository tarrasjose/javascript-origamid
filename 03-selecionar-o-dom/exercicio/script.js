// Retorne no console todas as imagens do site
console.log('Todas as imagens do site')
const img = document.querySelectorAll('img');
console.log(img);//Esta é a forma correta
const todasImagens = document.querySelectorAll('[src^=img]');
console.log(todasImagens);

const imagensAnimais = document.querySelectorAll('.animais-lista img');
console.log(imagensAnimais);

// Retorne no console apenas as imagens que começaram com a palavra imagem
console.log('Imagens que começam com a palavra imagem')
const comecaComPalavraImagem = document.querySelectorAll('img[src^="img/imagem"]')
console.log(comecaComPalavraImagem);
//ESTE ^ É ESSENCIAL PARA PEGAR O QUE COMEÇA COM TAL 

// Selecione todos os links internos (onde o href começa com #)
const TodosLinks = document.querySelectorAll('[href^="#"]');
console.log('todos os links internos (onde o href começa com #)')
console.log(TodosLinks)

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log('o primeiro h2 dentro de .animais-descricao')
console.log(primeiroH2);

//OUTRO JEITO DE BSUCAR O PRIMEIRO H2 É:
const animais = document.querySelector('.animais-descricao');
console.log(animais); //retornará a lista com todos animais e depois busco ele direito assim:
const primeiroH2animais = animais.querySelector('h2');
console.log(primeiroH2animais);


// Selecione o último p do site
console.log('Selecione o ultimo p')
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]); //Forma correta
console.log(paragrafos[--paragrafos.length]); //Desta forma também está correto com -- na antes, se colocar depois sabemos que não funcionará.
console.log(paragrafos[16]);

