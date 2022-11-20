function initTabNav () {
  const menuImagens = document.querySelectorAll('.js-tabmenu img');
  
  const menuConteudos = document.querySelectorAll('.js-tabcontent section');
  
  if(menuImagens.length && menuConteudos.length) {
    menuConteudos[0].classList.add('ativo');
    
    function classAtivo(index) {
      menuConteudos.forEach((conteudo) => {
        conteudo.classList.remove('ativo');
      })
      menuConteudos[index].classList.add('ativo');
    }
    
    menuImagens.forEach((imagem, index) => {
      imagem.addEventListener('click', () => {
        classAtivo(index);
      })
    })
  }

}
initTabNav();




/*accordion*/

function initAccordion () {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  
  if(accordionList.length) {
    const activeClass = 'ativo';
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    
    function activeAccordion () {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}
initAccordion();




/*SCROLL SUAVE */

function initeScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  
  if(linksInternos.length) {
    function scrollToSection (event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      console.log(href);
      const section = document.querySelector(href);
    
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    })
  }
}
initeScrollSuave();




// Aqui começa animacao ao scroll

const sections = document.querySelectorAll('.js-scroll');
console.log(sections);
const windowMetade = window.innerHeight * 0.6;

function animaScroll () {
  // console.log('funcionando');
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - windowMetade;
    // console.log(sectionTop)
    if(sectionTop < 0) {
      section.classList.add('ativo');
    } else {
      section.classList.remove('ativo');
    }
  })

}
animaScroll();

window.addEventListener('scroll', animaScroll)