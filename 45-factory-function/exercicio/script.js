function $$(elementosSelecionados) {
  const elements = document.querySelectorAll(elementosSelecionados);

  function ocultar() {
    elements.forEach(element => {
      element.style.display = 'none';
    });
    // Só melhorando o código, this é o proprio objeto, então ao invés de retornar a linha de baixo, possso retornar direto o this.
    // return $$(elementosSelecionados);
    return this;
  }

  function mostrar() {
    elements.forEach(element => {
      element.style.display = 'initial';
      // Se eu colocasse display block poderia dar problema, se caso eu tenha um elemento display inline-block
    });
    return $$(elementosSelecionados);
  }

  function on(onEvent, callback) {
    elements.forEach(element => {;
      element.addEventListener(onEvent, callback)
    });
    return $$(elementosSelecionados);
  }

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className);
    });
    return $$(elementosSelecionados);
  }

  function removeClass(className) {
    elements.forEach(element => {
      element.classList.remove(className);
    });
    return $$(elementosSelecionados);
  }

  return {
    elements,
    ocultar,
    mostrar,
    on,
    addClass,
    removeClass,
  }
}

const botoes = $$('button');
console.log(botoes);
console.log(botoes.elements);
console.log(botoes.ocultar().mostrar());

function handleClick(event) {
  console.log(event.target);
  botoes.addClass('active')
}

botoes.on('click', handleClick);

// botoes.addClass('active');