const swiper = new Swiper(".swiper", {
  effect: 'fade',
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

const tabItems = document.querySelectorAll('.tabs__btn-item');
const tabContents = document.querySelectorAll('.tabs__content-item');

tabItems.forEach(function(element) {
  element.addEventListener('click', open);
});

function open(event) {
  const tabTarget = event.currentTarget;
  const button = tabTarget.dataset.button;

  // Убираем активный класс у всех табов
  tabItems.forEach(function(item) {
    item.classList.remove('tabs__btn-item--active');
  });

  // Добавляем активный класс текущему табу
  tabTarget.classList.add('tabs__btn-item--active');

  // Убираем активный класс у всех контентных элементов
  tabContents.forEach(function(item) {
    item.classList.remove('tabs__content-item--active');
  });

  // Добавляем активный класс контенту, соответствующему текущему табу
  const targetContent = document.querySelector(`#${button}`);
  if (targetContent) {
    targetContent.classList.add('tabs__content-item--active');
  }
}
