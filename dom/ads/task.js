document.addEventListener("DOMContentLoaded", function () {
    const rotatorCases = document.querySelectorAll('.rotator__case');
    let activeIndex = 0;

    // Меняем активный класс и переходим к следующему элементу
    const rotateText = () => {
        // Убираем активный класс у текущего эл.
        rotatorCases[activeIndex].classList.remove('rotator__case_active');

        // Переходим к следующему эл
        activeIndex = (activeIndex + 1) % rotatorCases.length;

        // Добавляем активный класс к новому эл.
        rotatorCases[activeIndex].classList.add('rotator__case_active');
    };

    // Используем setInterval для бесконечного цикла смены текста
    setInterval(rotateText, 1000);
});
