var pessoa = {
  nome: "José",
  idade: 28, 
  profissao: "Designer",
  possuiFaculdade: true
}

console.log(typeof(pessoa));
console.log(pessoa);
console.log(pessoa.nome);


var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro (lado) {
    return this.lados * lado;

    //Pode usar este metodo também fazendo sem o function
  }, 
  cinco() {
    return 5;
  }
} 

console.table(quadrado);
console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(4));
console.log(quadrado.cinco());

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
  metadeHeight() {
    return this.height / 2; //Mesma coisa: menu.height / 2
  }
}
menu.backgroundColor = "#000";
var bg = menu.backgroundColor;
menu.color = "blue"; //Posso adionar novas propriedades e metodos 

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // true




