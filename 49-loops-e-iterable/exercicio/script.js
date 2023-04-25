// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const lis = document.querySelectorAll('li');
console.log(lis);

for(const li of lis) {
  li.classList.add('ativo')
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for(const windowKey in window) {
  // console.log(windowKey); Esta é a resposta;
  
  //E agora com os seus respectivos valores
  console.log(`${windowKey} : ${window[windowKey]}`);
}