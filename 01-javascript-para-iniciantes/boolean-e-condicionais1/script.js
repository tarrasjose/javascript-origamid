var graduacao = true;

if(graduacao) {
  console.log("Possui graduação")
} else {
  console.log("Não possui graduação")
}

var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado


/*
Truthy e Falsy
//Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.
// Falsy

if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``
 */

/*
Truthy
// Truthy

if(true)
if(1)
if(' ') //Se tiver espaço no meio
if('andre')
if(-5)
if({})

*/

/*
Operador Lógico de Negação !
O operador !, nega uma operação booleana. Ou seja, !true é igual a false

// Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // !!true //PRIMEIRO PASSA DE TRUE PARA FALSE E DEPOIS DE FALSE PARA TRUE
if(!!'') // false //!!PRIMEIRO PASSA DE FALSE PARA TRUE E DEPOIS DE TRUE PARA FALSE

 */

//var corFavorita;
var corFavorita = "azul"

switch(corFavorita) {
  case "vermelho":
    console.log("É a cor vermelha");
    break
  case "verde":
    console.log("É a cor verde");
    break;
  case "azul":
    console.log("É a cor Azul");
    break;
  default:
    console.log("Nenhuma cor");
}