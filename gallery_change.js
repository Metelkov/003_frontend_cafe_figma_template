/* случайное число - относительно каждой картинки - всего нужно 4 генератора */
let first__part__pic = "no-repeat center url(event_bottom_0";
let end__part_pic = ".jpg)";

function random__pic01() {
  let rnd__part = Math.floor(Math.random() * 4)+1;
  if (rnd__part == 0) {
    rnd__part++;
  }
  let random__part__pic = rnd__part;
  let gall__pic = first__part__pic + random__part__pic + end__part_pic;
  document.getElementsByClassName('events-gallery__pic01')[0].style.background = gall__pic;
}

setInterval(random__pic01, 2000);

function random__pic02() {
  let rnd__part = Math.floor(Math.random() * 4)+1;
  if (rnd__part == 0) {
    rnd__part++;
  }
  let random__part__pic = rnd__part;
  let gall__pic = first__part__pic + random__part__pic + end__part_pic;
  document.getElementsByClassName('events-gallery__pic02')[0].style.background = gall__pic;
}

setInterval(random__pic02, 2000);

function random__pic03() {
  let rnd__part = Math.floor(Math.random() * 4)+1;
  if (rnd__part == 0) {
    rnd__part++;
  }
  let random__part__pic = rnd__part;
  let gall__pic = first__part__pic + random__part__pic + end__part_pic;
  document.getElementsByClassName('events-gallery__pic03')[0].style.background = gall__pic;
}

setInterval(random__pic03, 2000);

function random__pic04() {
  let rnd__part = Math.floor(Math.random() * 4)+1;
  if (rnd__part == 0) {
    rnd__part++;
  }
  let random__part__pic = rnd__part;
  let gall__pic = first__part__pic + random__part__pic + end__part_pic;
  document.getElementsByClassName('events-gallery__pic04')[0].style.background = gall__pic;
}

setInterval(random__pic04, 2000);