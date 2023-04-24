new Swiper('.logoSwiper', {
    autoplay: {
      delay: 2500,
    },
    loop: true,
    // slidesPerColumnFill: 'column',
    // slidesPerGroup: 4,
    breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        710: {
            slidesPerView: 6,
        }
    },
    on: {
        init() {
          this.el.addEventListener('mouseenter', () => {
            this.autoplay.stop();
          });
    
          this.el.addEventListener('mouseleave', () => {
            this.autoplay.start();
          });
        }
    },
  });