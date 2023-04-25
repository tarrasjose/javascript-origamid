const doc = fetch('./doc.txt');
console.log(doc);

doc.then(resolucao => {
  return resolucao.text();
}).then((body) => {
  const conteudo = document.querySelector('.conteudo');
  conteudo.innerText = body
  console.log(body);
})

//////////////////////////////////// JSON

const cep = fetch('https://viacep.com.br/ws/25870000/json/');

cep.then(resolucao => {
  return resolucao.json();
}).then((body) => {
  console.log(body.logradouro);
  const conteudo = document.querySelector('.conteudo2');
  conteudo.innerText = body.localidade;
  console.log(body);
})

//////////////////////////////

const css = fetch('./style.css');
css.then(resolucao => {
  return resolucao.text();
}).then(body => {
  const conteudo = document.querySelector('.conteudo3');
  const style = document.createElement('style');
  style.innerHTML = body
  console.log(style);
  conteudo.appendChild(style)
})

/////////////////////////////////////////////// text

const sobre = fetch('./sobre.html');
const div = document.createElement('div');

sobre.then(r => r.text())
.then(body => {
  console.log(body);
  div.innerHTML = body;
  const titulo = div.querySelector('h1');
  console.log(titulo);

  document.querySelector('h1').innerText = titulo.innerText;
})


//////////////////////////////// blob

const imagem = fetch('./imagem.jpg');
console.log(imagem);

imagem.then(r => r.blob())
.then(body => {
  console.log(body);
  const blobUrl = URL.createObjectURL(body);
  const imagemDom = document.querySelector('img');
  imagemDom.src = blobUrl;
})

////////////////////////////////clone

const cep2 = fetch('https://viacep.com.br/ws/25870000/json/');

cep2.then(r => {
  const r2 = r.clone();
  r.text().then((text => {
    console.log('text', text);
  }))
  r2.json().then((json) => {
    console.log('json',json);
  })
  console.log(r);
})
.then(body => {
  console.log(body);
})


/////////////////////////////////// headers
const cep3 = fetch('https://viacep.com.br/ws/25870000/json/');

cep3.then(response => {
  console.log(response);
  response.headers.forEach(console.log)
})


/////////////////////////////////// status
const cep4 = fetch('https://viacep.com.br/ws/25870000/json/');

cep4.then(response => {
  console.log(response.status);
  if(response.status === 404) {
    console.log('Página não existe');
  }
})

/////////////////////////////////// url 
const cep5 = fetch('https://viacep.com.br/ws/25870000/json/');

cep5.then(response => {
  console.log(response.url);
  if(response.status === 404) {
    console.log('Página não existe');
  }
})


/////////////////////////////////// type
//Se o type for (basic) significa que estou fazendo uma requisição dentro do meu proprio servidor.
//Se o type for (cors) significa que foi uma requisição fora para outro servidor, mas que ela é permitida, exemplo se tentar acessar o google vai dar um erro poi não é permitido, diferente do viacep que é uma api, que é exatamente para isto, permitir que pessoas externas acessem a página
const cep6 = fetch('https://viacep.com.br/ws/25870000/json/');

cep6.then(response => {
  console.log(response.type);
  if(response.status === 404) {
    console.log('Página não existe');
  }
})