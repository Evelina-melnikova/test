// Получаем контейнер карусели и все карточки
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');

// Функция для остановки анимации при наведении
function stopAnimation() {
    carouselContainer.style.animationPlayState = 'paused';
}

// Функция для возобновления анимации при уходе курсора
function resumeAnimation() {
    carouselContainer.style.animationPlayState = 'running';
}

// Добавляем обработчики событий для остановки и возобновления анимации
carouselItems.forEach(item => {
    item.addEventListener('mouseenter', stopAnimation);
    item.addEventListener('mouseleave', resumeAnimation);
});
