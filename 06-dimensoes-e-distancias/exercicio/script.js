// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector('img');
console.log(primeiraImagem, primeiraImagem.offsetTop);

// Retorne a soma da largura de todas as imagens

let totalLarguraImagens = 0;

function somaImagens() {
  const imagens = document.querySelectorAll('img');
  
  console.log(imagens);

  imagens.forEach((imagem) =>{
    //console.log(imagem.width)
    console.log(imagem.offsetWidth);
    
    totalLarguraImagens += imagem.offsetWidth;

  });

  console.log(totalLarguraImagens);
  
}

window.onload = function() {
  somaImagens();
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
console.log('novo exercicio');

const links = document.querySelectorAll('a');
console.log(links);

links.forEach((link) => {

  console.log(link.offsetHeight, link.offsetWidth);
  const linkLargura = link.offsetWidth;
  const linkAltura = link.offsetHeight;

  if(linkAltura >= 48 && linkLargura >= 48) {
    console.log('Possui boa acessibilidade');
  } else {
    console.log('Não possui boa acessibilidade');
  
  }
})
/*
links.forEach((link) => {
  const rect = link.getBoundingClientRect();   
                              
  if(rect.width && rect.height > 48) {
    console.log(link.innerText, rect.width,'Link é maior');
  } else{
    console.log(link.innerText, rect.width, 'Link é menor');
  }
})

*/
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const verificaTela = window.matchMedia('(max-width:720px)').matches;
console.log('mobile', verificaTela);

const menu = document.querySelector('.menu');

if(verificaTela) {
  console.log('Mobile');
  menu.classList.add('menu-mobile');
} 