/*
document.getElementsByClassName('slide-00')[0].style.display="flex";
document.getElementsByClassName('slide-01')[0].style.display="none";
document.getElementsByClassName('slide-02')[0].style.display="none";
document.getElementsByClassName('slide-03')[0].style.display="none";
*/

//document.getElementsByClassName('specialties-photo slide-01')[0].style.display=slide__pic-00;

let count__sliders=0;
function next__slide() {
  count__sliders++;

if (count__sliders == 1) {
  //document.getElementsByClassName('slide-00')[0].style.display='flex';
  document.getElementsByClassName('slide-00')[0].style.left='1440px';
  document.getElementsByClassName('slide-01')[0].style.display='none';
  document.getElementsByClassName('slide-02')[0].style.display='none';
  document.getElementsByClassName('slide-03')[0].style.display='none';
}

if (count__sliders == 2) {
  document.getElementsByClassName('slide-00')[0].style.display='none';
  //document.getElementsByClassName('slide-01')[0].style.display='flex';
  document.getElementsByClassName('slide-01')[0].style.left='1440px';
  document.getElementsByClassName('slide-02')[0].style.display='none';
  document.getElementsByClassName('slide-03')[0].style.display='none';
}

if (count__sliders == 3) {
  document.getElementsByClassName('slide-00')[0].style.display='none';
  document.getElementsByClassName('slide-01')[0].style.display='none';
  //document.getElementsByClassName('slide-02')[0].style.display='flex';
  document.getElementsByClassName('slide-02')[0].style.left='1440px';
  document.getElementsByClassName('slide-03')[0].style.display='none';
}

if (count__sliders == 5) {
  count__sliders=1; }
console.log(count__sliders);
}
setInterval(next__slide, 2000);

