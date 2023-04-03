// const carousel = document.querySelector('.carousel');
// const carouselSlides = Array.from(carousel.children);
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// const totalSlides = carouselSlides.length;
// let currentSlide = 0;

// function setSlidePosition(slide, index) {
//   slide.style.transform = `translateX(${100 * index}%)`;
// }

// carouselSlides.forEach(setSlidePosition);

// function moveToSlide(slideNumber) {
//   carousel.style.transform = `translateX(-${100 * slideNumber}%)`;
//   currentSlide = slideNumber;
// }

// function moveToNextSlide() {
//   if (currentSlide === totalSlides - 1) {
//     moveToSlide(0);
//   } else {
//     moveToSlide(currentSlide + 1);
//   }
// }

// function moveToPrevSlide() {
//   if (currentSlide === 0) {
//     moveToSlide(totalSlides - 1);
//   } else {
//     moveToSlide(currentSlide - 1);
//   }
// }

// prevButton.addEventListener('click', moveToPrevSlide);
// nextButton.addEventListener('click', moveToNextSlide);
