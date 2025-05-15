var CartSwiper = new Swiper(".mySwiper6", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    wrapperClass: "swiper-wrapper6",
    slideClass: "swiper-slide6",
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
    },
  });