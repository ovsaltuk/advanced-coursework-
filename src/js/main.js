import '../scss/main.scss';
import '../index.html';
import Dropdown from './modules/dropdown';
import Swiper from 'swiper/bundle';

new Dropdown('region');
new Dropdown('category');

const heroSwiper = new Swiper('.js-hero__swiper', {
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

const swiperSpecialOffers = new Swiper('.special-offers-slider', {
  navigation: {
    nextEl: '.special-offers__swiper-button-next',
    prevEl: '.special-offers__swiper-button-prev',
  },
  slidesPerView: 'auto',
  slidesPerGroup: 3,
  spaceBetween: 32,
});
