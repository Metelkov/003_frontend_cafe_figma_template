/*
const slides = [
  document.getElementsByClassName('slide-00')[0],
  document.getElementsByClassName('slide-01')[0],
  document.getElementsByClassName('slide-02')[0],
  document.getElementsByClassName('slide-03')[0],
];
*/
let currentSlide = 0;
function changeSlide() {
    if (currentSlide == 0) {
      document.getElementsByClassName('slide-00')[0].style.transition = 'transform 2s ease-out';
      document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(0px)';
      console.log("ffff")
      document.getElementsByClassName('slide-01')[0].style.transition = '';
      document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(1440px)';

      document.getElementsByClassName('slide-02')[0].style.transition = '';
      document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(1440px)';

      document.getElementsByClassName('slide-03')[0].style.transition = '';
      document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(1440px)';
    }

    if (currentSlide == 1) {
      document.getElementsByClassName('slide-00')[0].style.transition = 'transform 2s ease-out';
      document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(-1440px)';
      /* и так не работает */
      document.getElementsByClassName('slide-00')[0].style.left = '1440';
      console.log("ffff")
      document.getElementsByClassName('slide-01')[0].style.transition = 'transform 2s ease-out';
      document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(0px)';
      console.log("ffff")
      document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(1440px)';
      document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(1440px)';
      
    }

    if (currentSlide == 2) {
      document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(-1440px)';
      console.log("ffff")
      document.getElementsByClassName('slide-01')[0].style.transition = 'transform 2s ease-out';
      document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(-1440px)';
      console.log("ffff")
      document.getElementsByClassName('slide-02')[0].style.transition = 'transform 2s ease-out';
      document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(0px)';
      document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(1440px)';
    }

    if (currentSlide == 3) {
      document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(-1440px)';
      console.log("ffff")
      document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(-1440px)';
      console.log("ffff")
      document.getElementsByClassName('slide-02')[0].style.transition = 'transform 2s ease-out';
      document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(-1440px)';
      document.getElementsByClassName('slide-03')[0].style.transition = 'transform 2s ease-out';
      document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(0px)';
    }

    currentSlide += 1;
    console.log(currentSlide);
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

    switch (event.target.innerText) {
      case 'slide00':
          //document.location.href = "#start__scroll";
          //alert("нажата кнопка слайдера 1");
  
          document.getElementsByClassName('slide-00')[0].style.transition = 'transform 2s ease-out';
          document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(0px)';
          document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(1440px)';
          document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(1440px)';
          document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(1440px)';
          //тут нужна функция останавливающая анимацию на 2 сек, но то что есть не так работает
      break;
      case 'slide01':
          alert("нажата кнопка слайдера 2");
          document.getElementsByClassName('slide-01')[0].style.transition = 'transform 2s ease-out';
          document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(0px)';
          document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(1440px)';
          document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(1440px)';
          document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(1440px)';
          //тут нужна функция останавливающая анимацию на 2 сек
      break;
      case 'slide02':
          alert("нажата кнопка слайдера 3");
          document.getElementsByClassName('slide-02')[0].style.transition = 'transform 2s ease-out';
          document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(0px)';
          document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(1440px)';
          document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(1440px)';
          document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(1440px)';
          //тут нужна функция останавливающая анимацию на 2 сек
      break;
      case 'slide03':
          document.getElementsByClassName('slide-03')[0].style.transition = 'transform 2s ease-out';
          document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(0px)';
          document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(1440px)';
          document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(1440px)';
          document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(1440px)';
          //тут нужна функция останавливающая анимацию на 2 сек
      break;
      }
  });
}