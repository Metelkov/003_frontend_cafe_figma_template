
document.querySelector('.slider-dots__common').addEventListener('click', function(event) {
    switch (event.target.innerText) {
    case 'slide00':
        //document.location.href = "#start__scroll";
        //alert("нажата кнопка слайдера 1");

        document.getElementsByClassName('slide-00')[0].style.transition = 'transform 2s ease-out';
        document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(0px)';
        document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(1440px)';
        document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(1440px)';
        document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(1440px)';
        wait2Sec();
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

async function wait2Sec() {
    await sleep(2000);
  }
 
