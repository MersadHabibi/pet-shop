let $ = document;
let mobileMenuBtn = $.querySelector('.menu-btn');
let mobileMenu = $.querySelector('.mobile-menu');
let closeMobileMenuBtn = $.querySelector('.close-btn');
let nextSlideBtn = $.querySelector(".next-slide-btn");
let prevSlideBtn = $.querySelector(".prev-slide-btn");
let cover = $.querySelector(".cover");
let HtmlElem = $.querySelector("html");
let menuActive = false;



mobileMenuBtn.addEventListener("click", openCloseMenu);
closeMobileMenuBtn.addEventListener("click", CloseMenu);
cover.addEventListener("click", CloseMenu);
nextSlideBtn.addEventListener("click",()=>{
    swiper.slidePrev();
})
prevSlideBtn.addEventListener("click",()=>{
    swiper.slideNext();
})
window.addEventListener("scroll",(e)=>{
    if(menuActive == false){
        return;
    }
    else{
        scroll(0 , 0);
    }
})




function openCloseMenu(){
    mobileMenuBtn.classList.add('menu-btn--active');
    mobileMenu.classList.add('mobile-menu--open');
    cover.classList.add("cover--active");
    HtmlElem.style.scrollBehavior = "unset";
    menuActive = true;
}
function CloseMenu(){
    mobileMenu.classList.remove('mobile-menu--open');
    mobileMenuBtn.classList.remove('menu-btn--active');
    cover.classList.remove("cover--active");
    HtmlElem.style.scrollBehavior = "smooth";
    menuActive = false;
    console.log('close');
}





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