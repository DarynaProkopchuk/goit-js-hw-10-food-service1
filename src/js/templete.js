import galleryItems from './gallery-items.hbs';
import menuList from '../menu.json';

const galleryRef = document.querySelector('.js-menu');

const markup = galleryItems(menuList);

galleryRef.insertAdjacentHTML('beforeend', markup);

