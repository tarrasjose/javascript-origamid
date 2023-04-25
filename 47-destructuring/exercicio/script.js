// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
// com getComputedStyle pega os valores atuais reais do style
const btnStyles = getComputedStyle(btn);
// console.log(btnStyles);

const {backgroundColor, color, margin} = btnStyles;
console.log(backgroundColor);
console.log(color);
console.log(margin);


// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

console.log(cursoAtivo);
console.log(cursoInativo);


// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}
// const {bobCor: cor} = cachorro;
// console.log(bobCor);

const {cor:bobCor} = cachorro;
console.log(bobCor);
