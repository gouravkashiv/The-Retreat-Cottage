// // Get the button element
// const learnMoreBtn = document.querySelector('.btn');

// // Add a click event listener to the button
// learnMoreBtn.addEventListener('click', function() {
//   // Redirect the user to the Learn More page
//   window.location.href = 'https://retreatcottage.in/learn-more.html';
// });

const carousel = document.querySelector('.carousel');
const slides = Array.from(carousel.children);
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let slideWidth = slides[0].getBoundingClientRect().width;
let currentIndex = 0;

// Arrange slides next to one another
function setSlidePosition(slide, index) {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

// Move carousel to the next slide
function moveToNextSlide() {
    if (currentIndex === slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    carousel.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

// Move carousel to the previous slide
function moveToPrevSlide() {
    if (currentIndex === 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex--;
    }
    carousel.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

// Add event listeners to buttons
prevButton.addEventListener('click', moveToPrevSlide);
nextButton.addEventListener('click', moveToNextSlide);
