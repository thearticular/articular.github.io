const scrollToTopButton = document.getElementById('scroll-to-top-button');
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});