function initTabNav () {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  console.log(tabMenu);
  
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  console.log(tabContent);
  
  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
    
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      })
    
      tabContent[index].classList.add('ativo');
    }
    
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      })
    })
  }
}
initTabNav(); //isolando escopo as proximas funçoes pode usar por exemplo nomes de const já usada

//A AULA DE ACCORDION COMEÇA AQUI:

function initAccordion () {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  console.log(accordionList);
  const activeClass = 'ativo'; //criando uma const ativo para usar, vai que no futuro quer mudar, assim mudaria em um unico lugar;

  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    
    function activeAccordion() {
      console.log(this); // this mostra exatamente em qual dono do evento foi clicado
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass); //nextElementSibling o próximo
    
    }
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }
}

initAccordion();