import outsideClick from './outsideclick'

export default function initMenuMobile() {

}

const menuButton = document.querySelector('[data-menu="button"]');
console.log(menuButton);
const menuList = document.querySelector('[data-menu="button"]');
console.log(menuList);

function openMenu(event) {
  menuButton.classList.add('active');
  menuList.classList.add('active');

}

menuButton.addEventListener('click', openMenu);