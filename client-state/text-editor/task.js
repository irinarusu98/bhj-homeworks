document.addEventListener("DOMContentLoaded", function () {
    const editor = document.getElementById("editor");

    // Надо проверить, есть ли сохраненное значение в localStorage
    const savedText = localStorage.getItem("editorText");

    // Если есть сохраненное значение, устанавливаем его в текстовый редактор
    if (savedText) {
        editor.value = savedText;
    }

    // Добавляем обработчик события input для отслеживания изменений в редакторе
    editor.addEventListener("input", function () {
        // Сохраняем значение в localStorage
        localStorage.setItem("editorText", editor.value);
    });
});
