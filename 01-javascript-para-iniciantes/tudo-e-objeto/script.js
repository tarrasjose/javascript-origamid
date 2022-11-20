var nome = "José";

var nomeMinusculo = nome.toLowerCase();

var num = 16.8;
console.log(num) //17

var btn = document.querySelector(".btn");
btn.addEventListener("click", function(){
  console.log("Clicou")
})

btn.classList.add("ativo")
btn.innerHTML = "Clique aqui";
btn.style.color = "red";
btn.style.textDecoration = "none";
