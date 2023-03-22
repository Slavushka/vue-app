// burger
document.querySelector(".header__burger").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("active");
  document.body.classList.toggle('stop-scroll');
})

document.querySelector(".header__burger-close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("active");
  document.body.classList.remove('stop-scroll');
})

let menuLinks = document.querySelectorAll('.nav-list__link');
menuLinks.forEach(function(elem) {
  elem.addEventListener('click', function() {
    document.querySelector(".header__nav").classList.remove("active");
    document.body.classList.remove('stop-scroll');
  });
});


// search
let searchWrapper = document.querySelector('.header__search-wrapper');
let searchOpen = document.querySelector('.header__search--open');
let searchClose = document.querySelector('.header__search--close');

searchOpen.addEventListener('click', function() {
  searchWrapper.classList.add('seatch-wrapper--active');
});

searchClose.addEventListener('click', function() {
  searchWrapper.classList.remove('seatch-wrapper--active');
})



// swiper
const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable:true,
  },


  a11y: {
    prevSlideMessage: 'Предыдущиый слайд',
    nextSlideMessage: 'Следующий слайд',
    lastSlideMessage: 'Это последний слайд',
    firstSlideMessage: 'Это первый слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
});


// tabs
let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');
let tabsItemDescr = document.querySelectorAll('.slider-left__wrapper');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');

    tabsItemDescr.forEach(function(element){ element.classList.remove('slider-left__wrapper--active')});
    document.querySelector(`[data-left="${path}"]`).classList.add('slider-left__wrapper--active');
  });
});


// accordion
new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});
