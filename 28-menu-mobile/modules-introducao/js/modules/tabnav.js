export default function initTabNav () {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  // console.log(tabMenu);
  
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  // console.log(tabContent);
  
  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
    
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      })
      console.log(tabContent[index].dataset.anime);

      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add('ativo', direcao);
    }
   
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      })
    })
  }
}
