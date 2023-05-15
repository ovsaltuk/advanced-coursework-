import '../scss/main.scss';
import '../index.html';
import Dropdown from './modules/Dropdown';
import Swiper from 'swiper/bundle';
import ShowMoreItems from './modules/ShowMoreItems';

new Dropdown('region');
new Dropdown('category');


//swiper hero
const heroSwiper = new Swiper('.js-hero__swiper', {

  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.hero__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

//swiper specail offers
const swiperSpecialOffers = new Swiper('.special-offers-slider', {
  navigation: {
    nextEl: '.special-offers__swiper-button-next',
    prevEl: '.special-offers__swiper-button-prev',
  },
  slidesPerView: 'auto',
  slidesPerGroup: 3,
  spaceBetween: 32,
});

//specialOffers
const specialOfferShowMoreItems = new ShowMoreItems('high-rating', 'specialOfferBnt');

//useful swiper 
const usefulSwiper = new Swiper ('.useful__swiper', {
  navigation: {
    nextEl: '.js-useful-next',
    prevEl: '.js-useful-prev',
  },

  slidesPerView: 'auto',
  slidesPerGroup: 2,
  spaceBetween: 32,
})