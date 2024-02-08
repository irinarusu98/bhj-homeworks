document.addEventListener('DOMContentLoaded', function () {
    var clickCounter = 0;                                                  // Инициализация счетчика кликов
    var cookieElement = document.getElementById('cookie');                 // Получаем элемент с изображением печеньки
    var counterElement = document.getElementById('clicker__counter');      // Получаем элемент счетчика

    // Обрабатываем клик
    function handleClick() {
        clickCounter++;                                              // Увеличиваем счетчик кликов

        // Чередуйте уменьшение и увеличение печеньки при каждом клике
        if (clickCounter % 2 === 0) {
            // Уменьшаем размер печеньки 
            cookieElement.style.width = '180px';
            cookieElement.style.height = '180px';
        } else {
            // Увеличиваем размер печеньки 
            cookieElement.style.width = '200px';
            cookieElement.style.height = '200px';
        }
        counterElement.textContent = clickCounter;
    }
    cookieElement.onclick = handleClick;
});
