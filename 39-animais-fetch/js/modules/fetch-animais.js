import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      // console.log(animaisJSON);
    
      const numerosGrid = document.querySelector('.numeros-grid');
    
      animaisJSON.forEach(animal => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal)
        // console.log(divAnimal);
      })
      initAnimaNumeros();
    } catch(erro) {
      console.log(erro);
    }
  }
  
  function createAnimal(animal) {
    // console.log(animal);
    const div = document.createElement('div');
    div.classList.add('numero-animal');
  
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
    return div;
  
  }
  
  fetchAnimais('./animaisapi.json');

}
