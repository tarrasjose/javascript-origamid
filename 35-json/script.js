// fetch('./dados.json')
// .then(r => r.json())
// .then(json => {
//   console.log(json);
//   console.log(json[0].tempo);

//   json.forEach((materia) => {
//     console.log(materia.aula);
//   })
// })

// JSON.PARSE() E JSON.STRINGIFY()
// JSON.parse() irá transformar um texto JSON em um objeto JavaScript. JSON.stringify() irá transformar um objeto JavaScript em uma string no formato JSON.
const textoJSON = '{"id": 1, "titulo": "JavaScript", "tempo": "25min"}';
const textoOBJ = JSON.parse(textoJSON);
console.log(textoOBJ);

const enderecoOBJ = {
  cidade: 'Rio de Janeiro',
  rua: 'Ali Perto',
  pais: 'Brasil',
  numero: 50,
};
const enderecoJSON = JSON.stringify(enderecoOBJ);
console.log(enderecoJSON);



const configuracoes = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript",
}
console.log(configuracoes);

const stringConfig = JSON.stringify(configuracoes);
console.log(stringConfig);

localStorage.config = JSON.stringify(configuracoes)
console.log(localStorage.config);
console.log(JSON.parse(localStorage.config));