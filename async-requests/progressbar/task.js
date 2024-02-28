document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const progressBar = document.getElementById('progress');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        // Загрузите форму через AJAX
        fetch(form.action, {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Файл успешно загружен', data);
            })
            .catch(error => {
                console.error('Ошибка загрузки файла', error);
            });

        // Отслеживайте событие изменения загрузки и в соответствии с ним корректируйте прогресс
        if (progressBar) {
            const xhr = new XMLHttpRequest();

            xhr.upload.addEventListener('progress', function (e) {
                if (e.lengthComputable) {
                    const progressPercentage = (e.loaded / e.total) * 100;
                    progressBar.value = progressPercentage;
                }
            });

            xhr.open('POST', form.action, true);
            xhr.send(formData);
        }
    });
});
