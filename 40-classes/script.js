// function Button(text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element = function() {
//   const buttonElement = document.createElement('button');
//   buttonElement.innerText = this.text;
//   buttonElement.style.background = this.background;
//   return buttonElement;
// }

// const blueButton = new Button('Comprar', 'blue');

// console.log(blueButton);
// console.log(blueButton.element());


//////////////////////////Vamos transformar em uma classe
// this.text ou this.background poderia alterar, não precisa ser esse nome, já o depois do sinal de igual tem que ser assim
// class Button {
//   constructor(text, background, color) {
//     this.text = text;
//     this.background = background;
//     this.color = color;
//     // return this.element(); Usando já retorna, mas impede de acessarmos outras, então não é bom usar assim.
//   }
//   element() {
//     // lembrando que este element, pode ser qualquer nome também
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     buttonElement.style.color = this.color;
//     return buttonElement;
//   }
//   appendTo(target) {
//     const targetElement = document.querySelector(target);
//     targetElement.appendChild(this.element());
//     console.log(this);
//     return targetElement;
//   }
// }

// const blueButton = new Button('Comprar', 'blue', 'white');
// console.log(blueButton);
// console.log(blueButton.element());
// console.log(blueButton.appendTo('body'));

/////////////////////////////////////////////////////

// class Button2 {
//   constructor(options) {
//     this.options = options;
//   }
// }

// const blueButton2 = new Button({
//   backgroundColor: 'blue',
//   text: 'Saiba Mais',
//   color: 'white',

// })

/////////////////////////////////////////////////////////
// class Button3 {
//   constructor(options) {
//     this.options = options;
//   }
// }

// const optionsBlue3 = {
//   backgroundColor: 'blue',
//   text: 'Comprar',
//   color: 'white',
// }

// const blueButton3 = new Button(optionsBlue3);
// console.log(blueButton3);


////////////////////////////////////
// class Button4 {
//   constructor(options) {
//     this.options = options;
//   }
//   static createElement(text, background) {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     buttonElement.style.background = background;
//     return buttonElement;
//   }
// }

// const optionsBlue4 = {
//   backgroundColor: 'blue',
//   text: 'Comprar',
//   color: 'white',
// }

// const blueButton4 = new Button(optionsBlue4);
// console.log(blueButton4);

// const blueButton4Static = Button4.createElement('clique', 'blue');
// console.log(blueButton4Static);

class Button {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
    // return this.element(); Usando já retorna, mas impede de acessarmos outras, então não é bom usar assim.
  }
  element() {
    // lembrando que este element, pode ser qualquer nome também
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    console.log(this);
    return targetElement;
  }
  static blueButton(text) {
    return new Button(text, 'blue', 'white');
  }
}

const botaoAzul = Button.blueButton('Clique');
console.log(botaoAzul);