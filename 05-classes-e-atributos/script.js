const menu = document.querySelector('.menu');

console.log(menu.classList);
console.log(menu.classList[1]);//acesso a classe azul

menu.classList.add('ativo', 'teste')
console.log(menu.classList); //já entrou a classe ativo e teste


menu.classList.remove('azul');
console.log(menu.classList); //Já removeu o azul

//toggle se tiver na lista, ele remove, se não tiver ele adiciona
menu.classList.toggle('azul'); //como removemos o azul o toggle adicionou
console.log(menu.classList); 

menu.classList.toggle('azul'); //Agora usamos toggle outra vez e removeu o azul pois ele já estava.
console.log(menu.classList); 

//contais avalia em valor boolean
menu.classList.toggle('azul'); //Depois de vericar que não tem a class azul inclui de volta

if(menu.classList.contains('azul')){
menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul')
} 
console.log(menu.classList)

//NÃO USE ESSE, mas se ver em algum código é bom saber que a pessoa está manipulando classe
//menu.className += ' vermelho';



//ATTRIBUTES



const animais = document.querySelector('.animais');
console.log(animais.attributes)
//animais tem tres attributes
console.log(animais.attributes[0]); //class .grid-section .animais
console.log(animais.attributes[1]); 

//posso também colocar a class direto
console.log(animais.attributes.class);

//para acessar o data-texto
console.log(animais.attributes['data-texto']);

//


const img = document.querySelector('img');
console.log(img);
console.log(img.getAttribute('src'));
console.log(img.getAttribute('alt'));


const imgMapa = document.querySelector('.mapa img');
console.log(imgMapa);

//verificando se a imagem do mapa possui alt e deu false
const testeAlt = imgMapa.hasAttribute('alt')
console.log(testeAlt)

//colocar um alt na imagem do mapa
//imgMapa.setAttribute('alt', 'Mapa em uma imagem');
//aparece no console


const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt)


const todasImagens = document.querySelectorAll('img');
console.log(todasImagens);

todasImagens.forEach(function(img, index){
  console.log(img)
  //console.log(img.getAttribute('alt')); //alt
  //console.log(img.getAttribute('src'));//src
  console.log(img.hasAttribute('alt'), index); //Todas tem atributo alt? a ultima deu false
})



