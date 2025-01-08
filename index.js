
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

// document.querySelectorAll('.popup-close').forEach((closeButton) => {
//   closeButton.addEventListener('click', (e) => {
//       const popup = e.target.closest('.popup'); // Находим родительский попап
//       closePopup(popup);
//   });
// });

// Закрытие попапа при клике вне его области
document.querySelectorAll('.popup').forEach((popup) => {
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      closeAllPopups(); // Закрываем все попапы
    } if (popup) {
      closePopup(popup);
  }
  });
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllPopups(); // Закрываем все попапы
  }
});
document.querySelectorAll('.questions-container__item').forEach((item) => {
  const button = item.querySelector('.questions-item__button');
  button.addEventListener('click', () => {
    // Убираем класс "open" у всех остальных элементов
    document.querySelectorAll('.questions-container__item').forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove('open');
      }
    });

    // Переключаем текущий элемент
    item.classList.toggle('open');
    const popup = link.closest('.popup');
   
  });
});
document.querySelectorAll('.popup-link__menu').forEach((link) => {
  link.addEventListener('click', (e) => {
      e.preventDefault(); // Отменяем стандартное действие ссылки

      const targetId = link.getAttribute('href').replace('#', ''); // Получаем ID
      let adjustedTargetId = targetId;

      // Логика выбора блока в зависимости от ширины экрана
      if (window.innerWidth >= 768) { // Десктоп
          if (targetId === 'production') adjustedTargetId = 'production-desktop';
          if (targetId === 'clothes') adjustedTargetId = 'clothes-desktop';
      } else { // Мобильная версия
          if (targetId === 'production') adjustedTargetId = 'production-mobile';
          if (targetId === 'clothes') adjustedTargetId = 'clothes-mobile';
      }

      const targetElement = document.getElementById(adjustedTargetId); // Находим целевой элемент
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' }); // Прокручиваем плавно
      } else {
          console.error(`Элемент с ID ${adjustedTargetId} не найден.`);
      }

      // Закрываем попап
      const popup = link.closest('.popup');
      if (popup) {
          closePopup(popup);
      }
  });
});
nameInput.addEventListener('input', validateName);
telInput.addEventListener('input', validateTel);  