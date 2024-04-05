document.addEventListener("DOMContentLoaded", function () {
    const editor = document.getElementById("editor");

    // Надо проверить, есть ли сохраненное значение в localStorage
    const savedText = localStorage.getItem("editorText");

    editor.value = savedText;  // Устанавливаем значение в текстовый редактор 

    // Добавляем обработчик события input для отслеживания изменений в редакторе
    editor.addEventListener("input", function () {
        // Сохраняем значение в localStorage
        localStorage.setItem("editorText", editor.value);
    });
});