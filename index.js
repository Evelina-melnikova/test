
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true, 
  slidesPerView: 'auto',
  centeredSlides: true, 
  spaceBetween: 0, 
  autoplay: {
    delay: 2000, 
    disableOnInteraction: true, 
  },
  slideToClickedSlide: true, // Прокрутка к карточке при клике на неё
  allowTouchMove: false, // Отключение сенсорной прокрутки
});

const swiperElement = document.querySelector('.swiper');

// Остановка autoplay при наведении на карусель
swiperElement.addEventListener('mouseenter', () => {
swiper.autoplay.stop();
});

// Возобновление autoplay при уходе курсора
swiperElement.addEventListener('mouseleave', () => {
swiper.autoplay.start();
});

// Добавление остановки autoplay при клике на любую карточку
document.querySelectorAll('.swiper-slide').forEach((slide) => {
slide.addEventListener('click', () => {
  swiper.autoplay.stop();
});
});

// Событие для возобновления autoplay после свайпа
swiper.on('touchEnd', () => {
swiper.autoplay.start();
});

const nameInput = document.getElementById('name');
const telInput = document.getElementById('tel');
const nameError = document.getElementById('name-error');
const telError = document.getElementById('tel-error');

function validateName() {
const nameValue = nameInput.value.trim();

const cleanedName = nameValue.replace(/[0-9]/g, '');

const formattedName = cleanedName.charAt(0).toUpperCase() + cleanedName.slice(1);

nameInput.value = formattedName;

if (formattedName === '') {
  nameInput.classList.add('error');
  nameError.textContent = 'Имя должно содержать только буквы и начинаться с заглавной буквы';
  nameError.classList.add('visible');
} else {
  nameInput.classList.remove('error');
  nameError.textContent = '';
  nameError.classList.remove('visible');
}
}

function validateTel() {
const telValue = telInput.value.trim();
const cleanedTel = telValue.replace(/[^0-9\s()+-]/g, '');

telInput.value = cleanedTel;

const telRegex = /^[+]?[0-9\s()-]{10,15}$/;
if (!telRegex.test(cleanedTel)) {
  telInput.classList.add('error');
  telError.textContent = 'Введите корректный номер телефона';
  telError.classList.add('visible');
} else {
  telInput.classList.remove('error');
  telError.textContent = '';
  telError.classList.remove('visible');
}
}
function closeAllPopups() {
  document.querySelectorAll('.popup').forEach((popup) => {
    popup.style.display = 'none'; // Скрываем попап
  });
}
// Функция открытия попапа
function openPopup(popupId) {
  closeAllPopups(); // Закрываем все открытые попапы
  const popup = document.getElementById(popupId);
  if (popup) {
      popup.style.display = 'flex'; 
      requestAnimationFrame(() => { 
      });
  }
}

// Функция открытия попапа
function openPopup(popupId) {
  closeAllPopups(); // Закрываем все открытые попапы
  const popup = document.getElementById(popupId);
  if (popup) {
      popup.style.display = 'flex'; // Отображаем попап
  }
}

// Функция закрытия попапа
function closePopup(popup) {
  popup.style.display = 'none'; // Скрываем попап
}

// Добавляем обработчики событий
document.querySelectorAll('.header-nav__item').forEach((button) => {
  button.addEventListener('click', () => {
      const popupId = button.getAttribute('data-popup'); // Получаем ID попапа
      openPopup(popupId);
  });
});

document.querySelectorAll('.popup-close').forEach((closeButton) => {
  closeButton.addEventListener('click', (e) => {
      const popup = e.target.closest('.popup'); // Находим родительский попап
      closePopup(popup);
  });
});

// Закрытие попапа при клике вне его области
document.querySelectorAll('.popup').forEach((popup) => {
  popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        closeAllPopups(); // Закрываем все попапы
      }
  });
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
      closeAllPopups(); // Закрываем все попапы
  }
});
nameInput.addEventListener('input', validateName); 
telInput.addEventListener('input', validateTel);  