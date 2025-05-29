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

// Initialize Swiper for large images
var largeImageSwiper = new Swiper(".largeImageSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    effect: "slide", // Sliding effect for large images
    wrapperClass: "swiper-wrapper5",
    slideClass: "swiper-slide5",
});

// Initialize Swiper for small images
var DetailProductSwiper = new Swiper(".mySwiper4", {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    wrapperClass: "swiper-wrapper4",
    slideClass: "swiper-slide4",
    breakpoints: {
        640: {
            slidesPerView: 4,
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

document.querySelectorAll('.swiper-slide4').forEach((slide, index) => {
    slide.addEventListener('click', () => {
        // Slide the large image Swiper to the same index as the clicked small image
        largeImageSwiper.slideToLoop(index);
    });
});

document.querySelectorAll('.select-btn-weight').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.select-btn-weight').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const counterValue = document.querySelector(".counter-value");
let count = 0;
increaseBtn.addEventListener("click", () => {
    count++;
    counterValue.innerHTML = count;
});
decreaseBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        counterValue.innerHTML = count;
    }
})
