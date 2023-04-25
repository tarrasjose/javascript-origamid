// async function puxarDados() {
//   const responseDados = await fetch('./dados.json');
//   const jsonDados = responseDados.json();
//   // Se colocar o responseDados.json() direto mais uma vez será uma promessa
//   console.log(jsonDados);
// }

// puxarDados();

async function puxarDados() {
  const responseDados = await fetch('./dados.json');
  const jsonDados = await responseDados.json();
  // Agora se coloco await vai ser o resultado da promessa
  console.log(jsonDados);
}

puxarDados();

// THEN / ASYNC
// A diferença é uma sintaxe mais limpa.
function iniciarFetch() {
  fetch('./dados.json')
  .then(dadosResponse => dadosResponse.json())
  .then(dadosJSON => {
    document.body.innerText = dadosJSON.aula;
  })
}
iniciarFetch();

async function iniciarAsync() {
  const dadosResponse = await fetch('./dados.json');
  const dadosJSON = await dadosResponse.json();
  document.body.innerText = dadosJSON.aula;
}

iniciarAsync();

// try catch

async function puxaDados() {
  try {
    const responseDados = await fetch('./dadoss.json');
    const jsonDados = await responseDados.json();
    document.body.innerText = jsonDados.aula;
  } catch (erro) {
    console.log(erro);
  }
}

puxaDados();

async function puxaDados() {
  const responseDados = fetch('./dados.json');
  const responseClientes = fetch('./clientes.json');

  const jsonDados = await (await responseDados).json();
  const jsonClientes = await (await responseClientes).json();

  console.log(jsonDados);
  console.log(jsonClientes);
}

puxaDados();