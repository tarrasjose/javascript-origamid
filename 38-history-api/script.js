// // console.log(window.history.back());
// window.history.pushState(null, null, 'sobre.html');

// window.addEventListener('popstate', () => {
//   console.log('Teste');
// })

const links = document.querySelectorAll('a');
console.log(links);

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
  window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url) {
  document.querySelector('.content').innerHTML = 'Carregando';
  const PageResponse = await fetch(url);
  const pageText = await PageResponse.text();
  console.log(url);
  console.log(PageResponse);
  console.log(pageText);
  replaceContent(pageText);
}

function replaceContent(newText) {
  const newHtml = document.createElement('div');
  newHtml.innerHTML = newText;

  const oldContent = document.querySelector('.content');
  const newContent = newHtml.querySelector('.content');

  oldContent.innerHTML = newContent.innerHTML;
  document.title =newHtml.querySelector('title').innerText;
  

  console.log(newHtml);
}

window.addEventListener('popstate', () => {
  console.log(window.location.href);
  fetchPage(window.location.href);
})

links.forEach(link => {
  link.addEventListener('click', handleClick);
})