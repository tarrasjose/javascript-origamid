const button = {
  get tamanho() {
    return this._numero || 100;
    // ou 100, se caso não tiver valor
  },
  set tamanho(numero) {
    this._numero = numero * 200;
  }
}
button.tamanho = 200
console.log(button.tamanho);

// VALOR ESTÁTICO
// Se definirmos apenas o get de um método, teremos então um valor estático que não será possível mudarmos.
const matematica = {
  get PI() {
    return 3.14;
  }
}
matematica.PI = 2 // mesmo fazendo isso não muda
console.log(matematica.PI);


// SET
// Eu posso ter um método com set apenas, que modifique outras propriedades do meu objeto.
const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta)
  }
}
frutas.nova = 'Banana';
frutas.nova = 'Morango'
console.log(frutas);

// Eu que testei isso
// frutas.lista.forEach((fruta) => {
//   console.log(fruta);
// })


// CLASS
// Assim como em um objeto, as classes podem ter métodos de get e set também.
class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }b
}

const blueButton = new Button('Comprar', 'blue');
console.log(blueButton);

// Com o set podemos modificar apenas parte do elemento de get. É comum definirmos variáveis privadas, utilizando o underscore _privada.

class Button2 {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const type = this._elementType || 'button';
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  set element(type) {
    this._elementType = type;
  }
}

const redButton = new Button2('Comprar', 'red');
redButton._elementType = 'div'
console.log(redButton.element);