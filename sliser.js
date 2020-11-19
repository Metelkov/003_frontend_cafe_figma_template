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
      document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(1440px)';
      document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(1440px)';
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

 setInterval(changeSlide, 3500);