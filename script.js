function nextSlide(button) {
  const carousel = button.parentElement;
  const slides = carousel.querySelectorAll('.slide');
  let index = Array.from(slides).findIndex(s => s.classList.contains('active'));

  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prevSlide(button) {
  const carousel = button.parentElement;
  const slides = carousel.querySelectorAll('.slide');
  let index = Array.from(slides).findIndex(s => s.classList.contains('active'));

  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}
