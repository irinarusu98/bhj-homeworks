document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("subscribe-modal");
    const closeButton = modal.querySelector(".modal__close");

    // Проверяем, есть ли информация о закрытии окна в localStorage
    const isModalClosed = localStorage.getItem("isModalClosed");

    // Если окно не было закрыто, отображаем его
    if (!isModalClosed) {
        modal.classList.add("modal_active");
    }

    // Добавляем обработчик события для кнопки закрытия окна
    closeButton.addEventListener("click", function () {
        // Скрываем окно при нажатии на кнопку закрытия
        modal.classList.remove("modal_active");

        // Сохраняем информацию о закрытии окна
        localStorage.setItem("isModalClosed", "true");
    });
});
