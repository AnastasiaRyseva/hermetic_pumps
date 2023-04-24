new Swiper('.swiper', {
    autoplay: {
      delay: 3700,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    centeredSlides: true,
    slidesPerView: 1,
    freeMode: false,
    mousewheel: false,
    keyboard: {
        enabled: true
    },
    breakpoints: {
        0: {
          slidesPerView: 1.25,
          spaceBetween: 4
        },
        710: {
            slidesPerView: 1
        }
    }
});