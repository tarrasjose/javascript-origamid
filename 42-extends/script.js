class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
  acelerar() {
    console.log('Acelerou!');
    // tá dando undefined porque não tenho nenhum valor de return
  }
}

// colocou o constructor tem que colocar o super
class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
  acelerar() {
    super.acelerar();
    console.log('Acelerou rápido');
  }
  empinar() {
    console.log('Moto empinou com ' + this.rodas + ' rodas');
  }
}

const honda = new Moto(2,'Gasolina', true);
console.log(honda);
console.log(honda.acelerar());
console.log(honda.empinar());

const civic = new Veiculo(4);
// console.log(civic);
// console.log(civic.acelerar());

// console.log(civic.empinar()); empinar dá erro pois só está em moto