
let currentSlide = 0;
function changeSlide() {
    if (currentSlide == 0) {
      document.getElementsByClassName('slide-00')[0].style.transition = 'transform 2s ease-out';
      document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(0px)';
      document.getElementsByClassName('slide-01')[0].style.transition = '';
      document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(1440px)';
      document.getElementsByClassName('slide-02')[0].style.transition = '';
      document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(1440px)';
      document.getElementsByClassName('slide-03')[0].style.transition = '';
      document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(-1440px)';

      document.getElementsByClassName('slider-dot-00')[0].style.background = '#E80000';
      document.getElementsByClassName('slider-dot-01')[0].style.background = '#E8C300';
      document.getElementsByClassName('slider-dot-02')[0].style.background = '#E8C300';
      document.getElementsByClassName('slider-dot-03')[0].style.background = '#E8C300';
    }

    if (currentSlide == 1) {
      document.getElementsByClassName('slide-00')[0].style.transition = 'transform 2s ease-out';
      document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(-1440px)';
      document.getElementsByClassName('slide-01')[0].style.transition = 'transform 2s ease-out';
      document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(0px)';
      document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(1440px)';
      document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(1440px)';

      document.getElementsByClassName('slider-dot-00')[0].style.background = '#E8C300';
      document.getElementsByClassName('slider-dot-01')[0].style.background = '#E80000';
      document.getElementsByClassName('slider-dot-02')[0].style.background = '#E8C300';
      document.getElementsByClassName('slider-dot-03')[0].style.background = '#E8C300';
    }

    if (currentSlide == 2) {
      document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(-1440px)';
      document.getElementsByClassName('slide-01')[0].style.transition = 'transform 2s ease-out';
      document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(-1440px)';
      document.getElementsByClassName('slide-02')[0].style.transition = 'transform 2s ease-out';
      document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(0px)';
      document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(1440px)';

      document.getElementsByClassName('slider-dot-00')[0].style.background = '#E8C300';
      document.getElementsByClassName('slider-dot-01')[0].style.background = '#E8C300';
      document.getElementsByClassName('slider-dot-02')[0].style.background = '#E80000';
      document.getElementsByClassName('slider-dot-03')[0].style.background = '#E8C300';
    }

    if (currentSlide == 3) {
      document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(1440px)';
      document.getElementsByClassName('slide-00')[0].style.transition = '';
      document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(-1440px)';
      document.getElementsByClassName('slide-02')[0].style.transition = 'transform 2s ease-out';
      document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(-1440px)';
      document.getElementsByClassName('slide-03')[0].style.transition = 'transform 2s ease-out';
      document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(0px)';

      document.getElementsByClassName('slider-dot-00')[0].style.background = '#E8C300';
      document.getElementsByClassName('slider-dot-01')[0].style.background = '#E8C300';
      document.getElementsByClassName('slider-dot-02')[0].style.background = '#E8C300';
      document.getElementsByClassName('slider-dot-03')[0].style.background = '#E80000';
    }

    currentSlide += 1;
      if (currentSlide == 4) {
        currentSlide = 0;
    }
  
}

/*
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

*/

let timerId = setInterval(changeSlide, 3500);

for (button of document.querySelectorAll('.slider-dots__common')) {
  button.addEventListener('click', function(event) {
    clearInterval(timerId);
    timerId = setInterval(changeSlide, 3500);

    switch (event.target.className) {
      case 'slider-dot-00':
          console.log("нажата кнопка слайдера 1");
          
          document.getElementsByClassName('slide-00')[0].style.transition = '';
          document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(0px)';
          document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(1440px)';
          document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(1440px)';
          document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(1440px)';
      break;
      case 'slider-dot-01':
        console.log("нажата кнопка слайдера 2");
          document.getElementsByClassName('slide-01')[0].style.transition = '';
          document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(0px)';
          document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(1440px)';
          document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(1440px)';
          document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(1440px)';
      break;
      case 'slider-dot-02':
        console.log("нажата кнопка слайдера 3");
          document.getElementsByClassName('slide-02')[0].style.transition = '';
          document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(0px)';
          document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(1440px)';
          document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(1440px)';
          document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(1440px)';
      break;
      case 'slider-dot-03':
        console.log("нажата кнопка слайдера 3");
          document.getElementsByClassName('slide-03')[0].style.transition = '';
          document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(0px)';
          document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(1440px)';
          document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(1440px)';
          document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(1440px)';
      break;
      }
  });
}