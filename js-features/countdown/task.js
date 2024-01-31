document.addEventListener('DOMContentLoaded', function () {
    var timerElement = document.getElementById('timer');

    var countdownSeconds = 59;                              //Cтартовое значение таймера

    function updateTimer() {
        timerElement.textContent = countdownSeconds;        // Обновляем отображение таймера
        countdownSeconds--;                                 // Уменьшаем значение таймера

        if (countdownSeconds < 0) {
            alert('Вы победили в конкурсе!');
        }
    }

    var timerInterval = setInterval(updateTimer, 1000);          // Каждую секунду уменьшайте значение таймера на 1
});







