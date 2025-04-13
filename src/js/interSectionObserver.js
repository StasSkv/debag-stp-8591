const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.header-nav-link');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`.header-nav-link[href="#${id}"]`);
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  },
  {
    root: null,
    threshold: 0.5,
  }
);

sections.forEach(section => {
  observer.observe(section);
});
