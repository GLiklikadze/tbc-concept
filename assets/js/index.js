console.log("hello world");
document.addEventListener("DOMContentLoaded", function () {});
let swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 3,
  slidesPerGroup: 1,
  direction: "horizontal",
  speed: 300,
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: ".main-slider-next",
    prevEl: ".main-slider-prev",
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggdraggable: true,
    dragSize: 300,
    hide: false,
  },
});
let updateScrollWidth = () => {
  let allSlides = swiper.slides.length;
  let visibleSlides = swiper.params.slidesPerView;
  let scrollDrag = document.querySelector(".swiper-scrollbar-drag");
  if (scrollDrag) {
    scrollDrag.style.width = `${(visibleSlides / allSlides) * 100}%`;
  }
};
