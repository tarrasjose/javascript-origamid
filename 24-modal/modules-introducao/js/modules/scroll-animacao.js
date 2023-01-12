export default function initeAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6; 
    // Metade na verdade teria que fazer * 0.5.
    
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        //console.log(sectionTop);
        const isSectionVisible = sectionTop - windowMetade;
        if(isSectionVisible < 0) {
          //console.log('animar');
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo'); //O professor normal só deixa a animcação uma vez, mas é opcional, neste caso removendo as animações continuam.
        }
      })
    }
    animaScroll(); /*Este já está para o site já dar a primeira animada para não ficar aquela tela vazia esperando dar o primeiro scroll */
    
    window.addEventListener('scroll', animaScroll);
  }
}