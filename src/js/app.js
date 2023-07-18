import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

new Swiper(".services__swiper", {
    grabCursor: true,
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    watchSlidesProgress: true,
    navigation:{
        nextEl: '.services__btn-next',
    },
    breakpoints:{
        1200:{
            slidesPerView: 3,
            spaceBetween: 30,
        },
        576:{
            slidesPerView: 3,
            spaceBetween: 15,
        }
    }
}); 

const menu = document.querySelector('.menu');
const right = document.querySelector('.header__right');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    menu.classList.toggle('active')
    right.classList.toggle('active')
    body.classList.toggle('hidden')
})