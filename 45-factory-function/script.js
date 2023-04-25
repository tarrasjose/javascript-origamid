// diferente da constructor e da classe, a factory function começa com letra minuscula
function createButton(text) {
  const codigoSecreto = 'shjakhk2k3';
  // Esse só está disponivel aqui dentro, a não ser que eu coloque ele no return

  function element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;
  }
  // Object.freeze para congelar
  return Object.freeze({
    text: text,
    element,
    
  });
}

const btnComprar = createButton('Comprar');
// console.log(btnComprar);
// console.log(btnComprar.element());

btnSaibaMais = createButton('Saiba Mais');
// console.log(btnSaibaMais);
// console.log(btnSaibaMais.element());

// usando Object.freeze não conseguirá escrever por cima
btnComprar.element = 'Novo Texto';
btnComprar.text = 'Novo Texto'
// console.log(btnComprar);

function Pessoa(nome) {
  // se ver instanceof significa que criaram um jeito de usar o constructor sem passar o new na frente
  // outra forma seria
  // if(!new.taget) se possui o target de pessoa
  if(!(this instanceof Pessoa)) {
    // console.log('Sim');
    return new Pessoa(nome)
  }
  // } else {
  //   console.log('Não');
  // }
  console.log(this);
  this.nome = nome;
}

Pessoa.prototype.andar = function() {
  return `${this.nome} andou`;
}

const designer = new Pessoa('André');
console.log(designer);