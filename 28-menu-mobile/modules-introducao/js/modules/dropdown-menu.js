import outsideClick from "./outsideClick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  // console.log(dropdownMenus);
  
  dropdownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick)
    })
    //menu.addEventListener('click', handleClick);
  })
  
  function handleClick(event) {
    event.preventDefault();
    // console.log(event);
    this.classList.add('active');
  
      // clique fora
    // outsideClick(this, ['touchstart', 'click'], () => {
    //   this.classList.remove('active');
    // });
    
    // //teste
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    })

  }
}







// primeira para colocar funcionando

// const dropdownMenus = document.querySelectorAll('[data-dropdown]');
// // console.log(dropdownMenus);

// dropdownMenus.forEach(menu => {
//   ['touchstart', 'click'].forEach(userEvent => {
//     menu.addEventListener(userEvent, handleClick)
//   })
//   //menu.addEventListener('click', handleClick);
// })

// function handleClick(event) {
//   event.preventDefault();
//   // console.log(event);
//   this.classList.add('active');

//     // clique fora
//   outsideClick(this, () => {
//     this.classList.remove('active');
//   });
// }

// // Clique fora

// function outsideClick(element, callback) {
//   const html = document.documentElement;
//   // console.log(html);
//   html.addEventListener('click', handleOutsideClick);
  
//   function handleOutsideClick(event) {
//     if(!element.contains(event.target)) {
//       console.log(element);
//       callback();
//     }
//   }
// }
