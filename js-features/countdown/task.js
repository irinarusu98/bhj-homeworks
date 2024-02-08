document.addEventListener('DOMContentLoaded', function () {
    const timerElement = document.getElementById('timer');

    let countdownSeconds = 59;                                // Cтартовое значение таймера

    function updateTimer() {
        timerElement.textContent = countdownSeconds;          // Обновляем отображение таймера
        countdownSeconds--;                                   // Уменьшаем значение таймера

        if (countdownSeconds < 0) {
            clearInterval(timerInterval);                     // Останавливаем интервал, если таймер закончился
            alert('Вы победили в конкурсе!');
        }
    }

    const timerInterval = setInterval(updateTimer, 1000);      // Каждую секунду уменьшайте значение таймера на 1
});



