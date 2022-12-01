// Liste 5 objetos nativos
//String, Number, Boolean, Function, Array, Object, Math

// Liste 5 objetos do browser
// NodeList, HTMLCollection, Element
//Window
// history

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if(typeof document.webkitHidden !== "undefined") {
  console.log('Existe!');
} else {
  console.log('Não existe!');
}

if(typeof document.webkitVisibilityState !== "undefined") {
  console.log('Existe!');
} else {
  console.log('Não existe!');
}
