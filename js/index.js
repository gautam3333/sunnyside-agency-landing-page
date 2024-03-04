const btnHamburder = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('header');

btnHamburder.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});
