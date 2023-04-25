// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background, color) {
  background = background || 'blue';
  if(color === undefined) {
    color = 'red';
  }
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  return buttonElement;
} 

const redButton = createButton();

// Resposta:
function createButton2(background = 'blue', color = 'red') {
  const button = document.createElement('button');
  button.style.background = background;
  button.style.color = color;

  // teste
  button.innerText = 'Teste';
  const body = document.querySelector('body');
  body.appendChild(button)
  console.log(button);
}
createButton2();
// createButton2('lightcoral', 'white');



// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];

console.log(comidas);
comidas.push(...frutas);
console.log(comidas);
// comidas.push('Cenoura',...frutas);
