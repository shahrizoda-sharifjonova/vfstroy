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

const Dropdowns = document.querySelectorAll('.header__dropdown');
const contents = document.querySelectorAll('.header__dropdown-content');

Dropdowns.forEach(dropdown=>{
    dropdown.addEventListener('click', (e)=>{
        dropdown.classList.toggle('active')
        dropdown.querySelector('.header__dropdown-content').classList.toggle('active')
    })
})

window.addEventListener('click', (e) => {
    Dropdowns.forEach(dropdown=>{
        if(dropdown.classList.contains('active')){
            if (!e.composedPath().includes(dropdown)){ 
                dropdown.classList.toggle('active')
                dropdown.querySelector('.header__dropdown-content').classList.toggle('active')
            }
        }
    })
})

const menu = document.querySelector('.menu');
const right = document.querySelector('.header__right');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    menu.classList.toggle('active')
    right.classList.toggle('active')
    body.classList.toggle('hidden')
})

const introDropdowns = document.querySelectorAll('.intro__dropdown-btn');
const introContents = document.querySelectorAll('.intro__dropdown-content');

introDropdowns.forEach(dropdown=>{
    dropdown.addEventListener('click', (e)=>{
        // introDropdowns.forEach(dropdown=>{
        //     dropdown.classList.remove('active')
        // })
        dropdown.classList.toggle('active')
    })
})