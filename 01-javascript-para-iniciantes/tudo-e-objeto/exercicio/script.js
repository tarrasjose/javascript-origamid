// nomeie 3 propriedades ou métodos de strings
var nome = "José";
console.log(nome.toUpperCase());
console.log(nome.length);
console.log(nome.charAt(3));
var novoNome = nome.replace("sé", "ão");
console.log(novoNome);
// nomeie 5 propriedades ou métodos de elementos do DOM
var titulo = document.querySelector(".titulo-principal");
titulo.innerHTML = "Bem vindo(a)!"

titulo.classList.add = "ativo";

titulo.classList.remove = "ativo"

titulo.addEventListener("click", function(){
  alert("Clicou no título!")
})

var lista = document.querySelector(".lista");
var li = document.createElement("li");
li.textContent = "Teste de como colocar um filho na lista";
lista.appendChild(li);

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

Just because you can doesn't mean you should — clipboard.js