document.addEventListener('DOMContentLoaded', function () {
    const tasksForm = document.getElementById('tasks__form');
    const taskInput = document.getElementById('task__input');
    const tasksList = document.getElementById('tasks__list');

    // Добавляем обработчик события на отправку формы
    tasksForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Получаем текст задачи и удаляем лишние пробелы
        const taskTitle = taskInput.value.trim();

        // Проверяем, что задача не пуста, и добавляем её
        if (taskTitle !== '') {
            addTask(taskTitle);
            taskInput.value = ''; // Очищаем поле ввода
        }
    });

    //  добавление задачи в список
    function addTask(title) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const taskTitleDiv = document.createElement('div');
        taskTitleDiv.classList.add('task__title');
        taskTitleDiv.textContent = title;

        const removeButton = document.createElement('a');
        removeButton.classList.add('task__remove');
        removeButton.href = '#';
        removeButton.innerHTML = '&times;';

        // Добавляем элементы к задаче
        taskDiv.appendChild(taskTitleDiv);
        taskDiv.appendChild(removeButton);

        // Добавляем задачу к списку
        tasksList.appendChild(taskDiv);

        // Добавляем обработчик события для кнопки удаления
        removeButton.addEventListener('click', function () {
            removeTask(taskDiv);
        });
    }

    //  удаление задачи из списка
    function removeTask(taskDiv) {
        tasksList.removeChild(taskDiv);
    }
});
