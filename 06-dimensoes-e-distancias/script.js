const listaAnimais = document.querySelector('.animais-lista');

console.log(listaAnimais.clientHeight); //Retornou altura

//só que é maior pois foi colocado scrool nele e pra pegar esse tamanho correto:
console.log(listaAnimais.scrollHeight);

//width
console.log(listaAnimais.clientWidth);

const animaisTop = listaAnimais.offsetTop; //distancia do topo da página
console.log(animaisTop);

const primeiroH2 = document.querySelector('h2');
const h2left = primeiroH2.offsetLeft;
console.log(h2left);

const rect = primeiroH2.getBoundingClientRect();
console.log(rect) //Retorna completo as direções
console.log(rect.top); //pode acessar assim também, esse rect top é a mesma coisa do offsetTop

window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

const small = window.matchMedia('(max-width: 700px)').matches;

if(small) {
  console.log('mobile')
} else {
  console.log('Desktop')
}