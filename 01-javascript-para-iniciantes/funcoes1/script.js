addEventListener("click", function() {
  console.log("Clicou!")
})

function mostraConsole() {
  console.log("oi")
}

addEventListener("click", mostraConsole);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(90, 2.00));

function  imc2(peso, altura) {
  const imc = peso / (altura * altura);
  console.log(imc);
}

imc2(68, 1.70);

function terceiraIdade(idade){
  if(typeof idade !== 'number') {
    return "Informe a sua idade"
  } else if(idade >= 65) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade());

function faltavisitar(paisesVisitados) {
  var totalDePaises = 193;
  return `Falta visitar ${totalDePaises - paisesVisitados} países.`
}

console.log(faltavisitar(2))

// Se quiser verificar fora da função a variaves totalDePaises, dará is not defined, porque ela está dentro deste escopo, para ter acesso a variavel teriamos que colocar fora da função.

var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28;

  function outrosDados() {
    var endereco = "Rio de Janeiro"
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`
  }
  return outrosDados();
}

console.log(dados());
