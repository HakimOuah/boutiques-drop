document.querySelectorAll('.image-container__slider').forEach(slider => {
  slider.addEventListener('input', function (e) {
    const sliderPos = e.target.value / 10;
    const container = e.target.closest('.image-container');
    container.querySelector('.image-container__img--foreground').style.width = `${sliderPos}%`;
    container.querySelector('.image-container__slider-button').style.left = `calc(${sliderPos}% - 15px)`;
  });
});
