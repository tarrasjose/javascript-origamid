// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(response => response.json())
// .then(pokemon => {
//   console.log(pokemon);
// })

const url = 'https://jsonplaceholder.typicode.com/posts/';
const options = {
  method: 'POST',
  body: '{"title": "JavaScript"}',
  headers: {
    "content-Type": "application/json; charset=utf-8"
  }
}

fetch(url, options)
.then(response => response.json())
.then(json => console.log(json))

// GET
// Puxa informação, utilizado para pegar posts, usuários e etc.

// POST
// Utilizado para criar posts, usuários e etc.

// PUT
// Geralmente utilizado para atualizar informações.

// DELETE
// Deleta uma informação.

// HEAD
// Puxa apenas os headers.


// CORS
// const url2 = 'https://www.google.com';

// fetch(url2)
// .then(response => response.text())
// .then(text => console.log(text))

// Não será permitido no google