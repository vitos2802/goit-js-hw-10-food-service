import itemTemplate from '../templates/menu-item.hbs';
import menu from '../menu.json';

const menuList = document.querySelector('.js-menu');
const markup = itemTemplate(menu);

menuList.insertAdjacentHTML('beforeend', markup);
