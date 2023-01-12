export default function initeScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
  
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    console.log(href);
    const section = document.querySelector(href);
  
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start', //Alinha no começo do elemento
    })
  
    /*
    FORMA ALTERNATIVA
      const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: 'smooth'
    })
    */
  
  }
  
  linksInternos.forEach((link) => {
  //  console.log(link);
   link.addEventListener('click', scrollToSection);
  })
}
