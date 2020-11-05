/*
document.getElementsByClassName('slide-00')[0].style.display="flex";
document.getElementsByClassName('slide-01')[0].style.display="none";
document.getElementsByClassName('slide-02')[0].style.display="none";
document.getElementsByClassName('slide-03')[0].style.display="none";


*/

/*
let slide__pic-00 = "no-repeat center/112% url(specialties-rectangle.jpg)";
let slide__pic-01 = "no-repeat center/112% url(chef.jpg)";
let slide__pic-02 = "no-repeat center/112% url(about-img.jpg)";
let slide__pic-03 = "no-repeat center/112% url(about-bookatable-img.jpg)";
let intermediate__slide = "slide__pic-0";

*/


//document.getElementsByClassName('specialties-photo slide-01')[0].style.display=slide__pic-00;


//let first__part__pic = "no-repeat center url(event_bottom_0";
//let end__part_pic = ".jpg)";


function turn__slide() {
  let slide__part = 0;

  /*
  let rnd__part = Math.floor(Math.random() * 4)+1;
  if (rnd__part == 0) {
    rnd__part++;
  }
  let random__part__pic = rnd__part;
  let gall__pic = first__part__pic + random__part__pic + end__part_pic;
  document.getElementsByClassName('events-gallery__pic04')[0].style.background = gall__pic;
*/

document.getElementsByClassName('specialties-photo slide-'+slide__part)[0].style.display=slide__pic-00;
  slide__part ++

  if (slide__part = 4) {
    slide__part == 0;
  }



}

setInterval(turn__slide, 2000);


//intermediate
/* let first__part__pic = "no-repeat center url(event_bottom_0";
let end__part_pic = ".jpg)";

function random__pic() {
let rnd__part = Math.floor(Math.random() * 4);
  if (rnd__part == 0) {
    rnd__part++;
  }
let random__part__pic = rnd__part;
let gall__pic = first__part__pic+random__part__pic+end__part_pic;
document.getElementsByClassName('events-gallery__pic02')[0].style.background=gall__pic;
}

*/