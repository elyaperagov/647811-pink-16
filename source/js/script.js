var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var header = document.querySelector('.page-header');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
if (navMain.classList.contains('main-nav--closed')) {
  navMain.classList.remove('main-nav--closed');
  navMain.classList.add('main-nav--opened');
  header.classList.remove('page-header--absolute');
  header.classList.add('page-header--relative');
} else {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  header.classList.add('page-header--absolute')
  header.classList.remove('page-header--relative');
}
});

var mapFooter = document.querySelector('.page-footer__map');
var mapIframe = document.querySelector('.page-footer__iframe');

if (mapFooter.classList.contains('page-footer__map--no-js')) {
  mapIframe.classList.remove('page-footer__iframe--with-js');
  mapIframe.classList.add('page-footer__iframe--no-js');
} else {
  mapIframe.classList.add('page-footer__iframe--with-js');
  mapIframe.classList.remove('page-footer__iframe--no-js');
}
});
