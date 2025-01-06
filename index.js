const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true, 
    slidesPerView: 'auto',
    centeredSlides: true, 
    spaceBetween: 0, 
    autoplay: {
      delay: 1500, 
      disableOnInteraction: true, 
    },
    // slideToClickedSlide: true, // Прокрутка к карточке при клике на неё
});

const swiperElement = document.querySelector('.swiper');

swiperElement.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();
  console.log('Autoplay paused');
});

swiperElement.addEventListener('mouseleave', () => {
  swiper.autoplay.start();
  console.log('Autoplay resumed');
});

swiper.on('touchEnd', () => {
  console.log('Swipe ended, autoplay resumed');
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

nameInput.addEventListener('input', validateName); 
telInput.addEventListener('input', validateTel);  
