import '../scss/main.scss';
import '../index.html';
import Dropdown from './modules/dropdown';
import Swiper from 'swiper/bundle';

new Dropdown('region');
new Dropdown('category');

const swiper = new Swiper('.js-hero__swiper', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 5000,
  },
  // If we need pagination
  pagination: {
    el: '.hero__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

});
