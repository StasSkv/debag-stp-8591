const popup = document.querySelector('#cookie-popup');
const acceptButton = document.querySelector('.accept');
const declineButton = document.querySelector('.decline');

if (!localStorage.getItem('cookiesAccepted')) {
  popup.classList.add('show');
}

acceptButton.addEventListener('click', () => onClick('accepted'));
declineButton.addEventListener('click', () => onClick('declined'));

function onClick(value) {
  popup.classList.remove('show');
  localStorage.setItem('cookiesAccepted', value);
}
