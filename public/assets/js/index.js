var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  on: {
    slideChangeTransitionStart: function () {
      // Remove animate class ពី all slide contents
      document.querySelectorAll('.slide-content, .slide-content-chile-2').forEach(el => {
        el.classList.remove('animate');
      });

      // Add animate class only to the current slide content
      const activeSlide = document.querySelector('.swiper-slide-active');
      const slideContent = activeSlide.querySelector('.slide-content, .slide-content-chile-2');
      if (slideContent) {
        // Force reflow to restart animation
        void slideContent.offsetWidth;
        slideContent.classList.add('animate');
      }
    }
  }
});
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => {
    el.classList.remove('active');
  });

  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
  });

  document.getElementById(tabId).classList.add('active');

  event.target.classList.add('active');
}

var FeedbackSwiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  loop: true,
  wrapperClass: "swiper-wrapper2",
  slideClass: "swiper-slide2"
});
var BlogSwiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  wrapperClass: "swiper-wrapper3",
  slideClass: "swiper-slide3",
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

