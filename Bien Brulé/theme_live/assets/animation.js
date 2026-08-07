document.addEventListener('DOMContentLoaded', function () {
  window.sr = ScrollReveal({
    duration: 800,
    origin: 'bottom',
    distance: '25px',
    scale: 0.85,
  });

  sr.reveal('.product-card-wrapper', { interval: 100 });
  sr.reveal('.collection-card', { interval: 100 });
  sr.reveal('.article-card-wrapper', { interval: 100 });
  sr.reveal('.sr-animate--no-interval');
});
