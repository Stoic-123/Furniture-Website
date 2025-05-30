window.onload = () => {
  const searchContent = document.getElementById("search-header");
  const icon = document.getElementById("search-icon-head");
  const icon2 = document.getElementById("search-icon-bottom");
  const cancelIcon = document.querySelector(".cancel_icon_header");
  const body = document.body;
  searchContent.style.marginTop = "-300px";
  body.style.overflowY = "auto";
  cancelIcon.addEventListener("click", () => {
    searchContent.style.marginTop = "-300px";
    searchContent.style.transition = "0.3s"
    body.style.overflowY = "auto";
  });
  icon.addEventListener("click", () => {
    searchContent.style.marginTop = "-45px";
    searchContent.style.transition = "0.3s"
    body.style.overflowY = "hidden";

  });
  icon2.addEventListener("click", () => {
    searchContent.style.marginTop = "-45px";
    searchContent.style.transition = "0.3s"
    body.style.overflowY = "hidden";

  });
};
function animateNumber(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  function update() {
    start += increment;
    if (start >= target) {
      element.innerText = target;
    } else {
      element.innerText = Math.floor(start);
      requestAnimationFrame(update);
    }
  }
  update();
}

// Observe when the section comes into view
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".number-load");
  let animated = false;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        counters.forEach(counter => {
          const target = parseInt(counter.innerText);
          animateNumber(counter, target);
        });
        animated = true;
        observer.disconnect(); // Stop observing after animation
      }
    });
  }, {
    threshold: 0.4 // Trigger when 40% of the section is visible
  });

  const section = document.querySelector(".second-about-section");
  if (section) {
    observer.observe(section);
  }
});


var FeedbackSwiper = new Swiper(".mySwiper8", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination8",
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
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  loop: true,
  wrapperClass: "swiper-wrapper8",
  slideClass: "swiper-slide8"
});
