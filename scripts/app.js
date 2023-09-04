let $ = document;
let mobileMenuBtn = $.querySelector('.menu-btn');
let mobileMenu = $.querySelector('.mobile-menu');
let closeMobileMenuBtn = $.querySelector('.close-btn');
let nextSlideBtn = $.querySelector(".next-slide-btn");
let prevSlideBtn = $.querySelector(".prev-slide-btn");




function openCloseMenu(){
    mobileMenuBtn.classList.toggle('menu-btn--active');
    mobileMenu.classList.toggle('mobile-menu--open')
}
function CloseMenu(){
    mobileMenu.classList.remove('mobile-menu--open');
    mobileMenuBtn.classList.remove('menu-btn--active');
}

mobileMenuBtn.addEventListener("click", openCloseMenu);
closeMobileMenuBtn.addEventListener("click", CloseMenu);
nextSlideBtn.addEventListener("click",()=>{
    swiper.slidePrev();
})
prevSlideBtn.addEventListener("click",()=>{
    swiper.slideNext();
})


//  slider
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 1,
        depth: 100,
        modifier: 5,
        slideShadows: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        992: {
            slidesPerView: 2,
            spaceBetween: -600
        },
        0: {
            slidesPerView: 1
        }
    }
  });
  swiper.slideNext();