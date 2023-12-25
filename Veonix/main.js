const slider = document.querySelector('.slider');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');

let translateValue = 0;
const slideWidth = slider.clientWidth;

prevArrow.addEventListener('click', () => {
  translateValue += slideWidth;
  slider.style.transform = `translateX(${translateValue}px)`;
});

nextArrow.addEventListener('click', () => {
  translateValue -= slideWidth;
  slider.style.transform = `translateX(${translateValue}px)`;
});


