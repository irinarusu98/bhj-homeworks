document.addEventListener("DOMContentLoaded", function() {
    const fontSizeButtons = document.querySelectorAll('.font-size');
    const book = document.getElementById('book');

    // Функция для обработки клика по кнопкам смены размера шрифта
    function changeFontSize(event) {
        event.preventDefault();

        // Удаляю класс font-size_active у всех кнопок
        fontSizeButtons.forEach(button => button.classList.remove('font-size_active'));

        // Добавляю класс font-size_active к нажатой кнопке
        event.target.classList.add('font-size_active');

        // Определяем, какой размер шрифта нужно установить книге
        if (event.target.dataset.size === 'small') {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        } else if (event.target.dataset.size === 'big') {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        } else {
            book.classList.remove('book_fs-small', 'book_fs-big');
        }
    }

    // обработчик клика 
    fontSizeButtons.forEach(button => button.addEventListener('click', changeFontSize));
});
