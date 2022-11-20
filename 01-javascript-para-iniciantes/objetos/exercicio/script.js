// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa = {
  nome: "Tárras José",
  sobreNome: "de Souza",
  idade: 30,
  cidade: "Comendador Levy Gasparian, RJ",
  nomeCompleto: function() {
    return `${this.nome} ${this.sobreNome}`
  }
}
console.log(pessoa);


// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(pessoa.nomeCompleto())

//Incluindo por conta outra propriedade
pessoa.nacionalidade = "Brasil";

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

console.log(carro.preco); ///1000
carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "Labrador",
  cor: "preto",
  idade: 10,
  late: function(pessoa){
    if(pessoa === "homem") {
      return "Latindo...ao ver um homem";
    } else {
      return "Não faz nada";
    }
  }
}
console.log(cachorro)