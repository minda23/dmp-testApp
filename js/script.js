 const toggleBtn = document.querySelector('.nav__toggle');
  const navRight = document.querySelector('.nav__right');

  toggleBtn.addEventListener('click', () => {
    navRight.classList.toggle('nav__right--open');
  });