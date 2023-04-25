const frutas = ['Banana', 'Morango', 'Uva'];
console.log(frutas); //Symbol(Symbol.iterator) sendo iterator podemos usar isso assim

// For of usa-se em iterable e for in é para um objeto qualquer

for(const fruta of frutas) {
  console.log(fruta);
}
// O me melhor para usar em uma array é o for of
// se caso usar o for in com uma array sairá o numero
for(const fruta in frutas) {
  console.log(fruta);
  //console.log(frutas[fruta]); Teria que usar assim para puxar o nome da fruta, sendo que no for of já sai direto
}

const frase = 'Isso é JavaScript';
console.log(frase.__proto__); //Symbol(Symbol.iterator)

for(char of frase) {
  // console.log(char);
}

const buttons = document.querySelectorAll('button');
console.log(buttons);

for(const botao of buttons) {
  botao.style.background = 'blue';
}

console.log(...buttons);

// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(({headers}) => console.log(headers));

const carro = {
  marca: 'Honda',
  ano: 2018,
}

Object.defineProperties(carro, {
  rodas: {
    value: 4,
    enumerable: true,
    //Se enumerable for false o for não fará o loop por rodas
  }
})

console.log(carro); //Este não tem iterable

//Então usa o for in

for(const chave in carro) {
  // console.log(chave);
  console.log(chave, carro[chave]);
}


const botaoUnico = document.querySelector('button');
console.log(botaoUnico);
// Assim se pega os styles
const botaoUnicoStyles = getComputedStyle(botaoUnico);
console.log(botaoUnicoStyles);

for(const style in botaoUnicoStyles) {
  console.log(`${style}: ${botaoUnicoStyles[style]}`);
}

// Mais um exemplo de loop não tão utilizado
let i = 0;
do {
  console.log(i++);
} while(i <= 5);
