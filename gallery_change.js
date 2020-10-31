/* случайное число - относительно каждой картинки - всего нужно 4 генератора */
let first__part__pic = "no-repeat center url(event_bottom_0";
let end__part_pic = ".jpg)";

function random__pic() {
  let rnd__part = Math.floor(Math.random() * 4);
  if (rnd__part == 0) {
    rnd__part++;
  }
  let random__part__pic = rnd__part;
  let gall__pic = first__part__pic + random__part__pic + end__part_pic;
  document.getElementsByClassName('events-gallery__pic02')[0].style.background = gall__pic;
}

setInterval(random__pic, 2000);

/*  нужно 4 функции, чтобы работали на все картинки
while (true) {
    setTimeout(random__pic(), 2000);
}

*/

/* этот файл отключен в  html. вызывает активность сети и нагрузку на диск */