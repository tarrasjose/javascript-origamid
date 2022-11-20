// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
console.log(itensMenu);

itensMenu.forEach(function(item) {
  item.classList.add('ativo');
})
console.log(itensMenu);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item, index) => {
  if(index > 0) {
    item.classList.remove('ativo')
  }
})
/*
//Assim foi a resposta
itensMenu.forEach(item) => {
  item.classList.remove('ativo)
}
//itensMenu[0].classList.add('ativo')
*/

// Verifique se as imagens possuem o atributo alt
var imagens = document.querySelectorAll('img');
console.log(imagens);

imagens.forEach(function(img){
  console.log(img, img.hasAttribute('alt'));
})


// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
console.log(link);
link.setAttribute('href', 'https://fonts.google.com/');
console.log(link);

//Eu fiz assim de primeira
/*
const linkExterno = document.querySelectorAll('.menu a');
console.log(linkExterno[3]);
linkExterno[3].setAttribute('href', 'https://www.google.com');
*/




