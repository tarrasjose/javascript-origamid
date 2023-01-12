const pessoa = new Object({
  nome: 'André',
  idade: 30,
})

console.log(pessoa);

// MÉTODOS DE OBJECT
// Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.

const pessoa2 = {
  nome: 'André',
  idade: 30
}
console.log(pessoa2);

const carro = {
  marca: 'Marca',
  rodas: 4,
  acelerar() {
    return this.marca + ' acelerou!'
  },
  buzinar() {
    return this.marca + ' Buzinou'
  }
}
console.log(carro);


const toyota = Object.create(carro);
console.log(toyota);
toyota.marca = 'Toyota';
console.log(toyota);


const carro2 = {
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + ' acelerou';
  },
  buzinou() {
    return this.marca + ' buzinou';
  }
} 

const honda = Object.create(carro2).init('Honda');
console.log(honda);

const ferrari = Object.create(carro2).init('Ferrari')
console.log(ferrari);

// OBJECT.DEFINEPROPERTIES()
// Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}


const moto = {
  rodas: 2,
  capacete: true,
}

const carro3 = {
  rodas: 4,
  mala: true,
}

Object.assign(moto, funcaoAutomovel);
console.log(moto);

// OBJECT.DEFINEPROPERTIES()
// Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.

const moto2 = {
  capacete: true,
}

Object.defineProperties(moto2, {
  rodas: {
    value: 2,
    configurable: false, 
    //com o configurable false não permite deletar rodas
    writable: true,
    //com writable true permite reescrever mudar o numero de rodas por exemplo, permite mudar o valor

    //Por padrão configurable e writable começam false então nem precisa configurar, então só coloca se quiser mudar para true

    enumerable: true, //torna enumerável

  }
})

delete moto2.rodas; //com o configurable false não permite deletar rodas, já o capacete sim
moto2.rodas = 3
console.log(moto2);





const moto3 = {
  capacete: true,
}

Object.defineProperties(moto3, {
  rodas: {
    get() {
      return this._rodas;
    }, 
    set(valor) {
      this._rodas = valor * 4 + ' rodas';
    }
  }
})

moto3.rodas = 4;

console.log(moto3.rodas);

// OBJECT.GETOWNPROPERTYDESCRIPTORS(OBJ)
// Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.

console.log(Object.getOwnPropertyDescriptors(Array)); // Lista com métodos e propriedades e Array

console.log(Object.getOwnPropertyDescriptors(Array.prototype));
// Lista com métodos e propriedades do protótipo de Array);

console.log(Object.getOwnPropertyDescriptor(window, 'innerHeight'));
// Puxa de uma única propriedade

console.log(Object.getOwnPropertyDescriptors(moto3));



const moto4 = {
  capacete: true,
}

Object.defineProperties(moto4, {
  rodas: {
    enumerable: true,
    //com enumerable agora aparece na array rodas
    get() {
      return this._rodas;
    }, 
    set(valor) {
      this._rodas = valor * 4 + ' rodas';
    }
  }
})

console.log(Object.keys(moto4));
console.log(Object.values(moto4));
console.log(Object.entries(moto4));

console.log(Object.getOwnPropertyNames(Array));
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

console.log(Object.getOwnPropertyNames(Array.prototype));
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

console.log(Object.getOwnPropertyNames(moto4));



// Object.getPrototypeOf(), retorna o protótipo do objeto. 
const frutas = ['Banana'];

console.log(Object.getPrototypeOf(frutas));
// Mesma coisa disso aqui
console.log(Array.prototype);




//  Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];
const novasFrutas = frutas1;

//se mudar novasFrutas, vai mudar também frutas1, pois são as mesmas coisas
novasFrutas[0] = 'Uva';
console.log(frutas1); //frutas1 também mudou

console.log(Object.is(frutas1, frutas2)); //false
console.log(Object.is(frutas1, novasFrutas)); //true


// OBJECT.FREEZE(), OBJECT.SEAL(), OBJECT.PREVENTEXTENSIONS()
// Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.

const carro4 = {
  marca: 'Ford',
  ano: 2018,
}

// Object.freeze(carro4); //Impede qualquer mudança
// carro4.marca = 'Honda';

Object.seal(carro4); //Não permite adicionar novas propriedades
carro4.portas = 5;
delete carro4.marca; //seal também não permite deletar

console.log(carro4);

const carro5 = {
  marca: 'Ford',
  ano: 2018,
}

Object.preventExtensions(carro5);
carro5.portas = 4; //previne adicionar
delete carro5.marca; //mas não previne deletar
console.log(carro5);

//Carro está congelado?
console.log(Object.isFrozen(carro5)); //false
console.log(Object.isExtensible(carro5)); //false

console.log(Object.isSealed(carro5)); //false

// {}.hasOwnProperty('prop') e {}.propertyIsEnumerable('prop')
// Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.

const frutas3 = ['Banana', 'Uva'];

console.log(frutas3.hasOwnProperty('map')); // false
console.log(Array.hasOwnProperty('map')); // false
console.log(Array.prototype.hasOwnProperty('map')); // true

console.log(Array.prototype.propertyIsEnumerable('map')); // false
console.log(window.propertyIsEnumerable('innerHeight')); // true


// {}.isPrototypeOf(valor)
// Verifica se é o protótipo do valor passado.

const frutas4 = ['Banana', 'Uva'];

Array.prototype.isPrototypeOf(frutas); // true

// {}.toString()
// Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).
const frase = 'Oi frase';

const somar = function(a, b) {
  return a + b;
}

const li = document.querySelectorAll('li');

const carro6 = {
  marca: 'Fiat',
}

console.log(frutas4.toString());
console.log(Object.prototype.toString.call(frutas4));
console.log(Object.prototype.toString.call(frase));
console.log(Object.prototype.toString.call(somar));
console.log(Object.prototype.toString.call(li));
console.log(Object.prototype.toString.call(carro6));