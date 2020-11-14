const slides = [
  document.getElementsByClassName('slide-00')[0],
  document.getElementsByClassName('slide-01')[0],
  document.getElementsByClassName('slide-02')[0],
  document.getElementsByClassName('slide-03')[0],
];

function showSlide(slideNumber) {
  slides.forEach(function(slide, index) {
    slide.style.transition = 'transform 1s ease-out';
    slide.style.transform = 'translateX(calc(1440px * ' + (index - slideNumber) + '))';
  });
}

let currentSlide = 0;
function changeSlide() {
  currentSlide++;
  showSlide(currentSlide % slides.length);
}

// setInterval(changeSlide, 2000);