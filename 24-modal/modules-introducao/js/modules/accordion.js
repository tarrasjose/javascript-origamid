export default function initAccordion () {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  // console.log(accordionList);
  const activeClass = 'ativo'; //criando uma const ativo para usar, vai que no futuro quer mudar, assim mudaria em um unico lugar;

  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    
    function activeAccordion() {
      // console.log(this); // this mostra exatamente em qual dono do evento foi clicado
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass); //nextElementSibling o próximo
    
    }
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }
}
