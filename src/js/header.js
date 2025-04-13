const refs = {
  menu: document.querySelector('.header'),
  nav: document.querySelector('.header-nav-list-modal'),
  burger: document.querySelector('.header-burger'),
  closeX: document.querySelector('.header-x-close'),
  modal: document.querySelector('.header-modal'),
  modalNavList: document.querySelector('.header-modal-menu-list'),
};

refs.burger.addEventListener('click', () => {
  refs.modal.classList.add('modal-is-visible');
  refs.burger.style.display = 'none';
  refs.closeX.style.display = 'block';
  document.body.classList.add('no-scroll');
});

refs.closeX.addEventListener('click', () => {
  refs.modal.classList.remove('modal-is-visible');
  refs.burger.style.display = 'block';
  refs.closeX.style.display = 'none';
  document.body.classList.remove('no-scroll');
});

refs.modal.addEventListener('click', event => {
  refs.modal.classList.remove('modal-is-visible');
  refs.burger.style.display = 'block';
  refs.closeX.style.display = 'none';
  document.body.classList.remove('no-scroll');
});

document.addEventListener('keydown', event => {
  if (
    event.key === 'Escape' &&
    refs.modal.classList.contains('modal-is-visible')
  ) {
    refs.modal.classList.remove('modal-is-visible');
    refs.burger.style.display = 'block';
    refs.closeX.style.display = 'none';
    document.body.classList.remove('no-scroll');
  }
});

const checkScreenWidth = () => {
  if (window.innerWidth > 1200) {
    refs.burger.style.display = 'none';
    refs.closeX.style.display = 'none';
  } else {
    if (refs.modal.classList.contains('modal-is-visible')) {
      refs.burger.style.display = 'none';
      refs.closeX.style.display = 'block';
    } else {
      refs.burger.style.display = 'block';
      refs.closeX.style.display = 'none';
    }
  }
};

checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);
