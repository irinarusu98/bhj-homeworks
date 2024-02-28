document.addEventListener("DOMContentLoaded", function () {
    const pollTitleElement = document.getElementById("poll__title");
    const pollAnswersElement = document.getElementById("poll__answers");

    // Загрузите случайный опрос, отправив GET-запрос по адресу
    loadRandomPoll();

    function loadRandomPoll() {
        fetch("https://students.netoservices.ru/nestjs-backend/poll")
            .then(response => response.json())
            .then(data => {
                // Отобразите вопрос и список ответов в виде кнопок
                pollTitleElement.textContent = data.data.title;
                displayAnswers(data.data.answers);
            })
            .catch(error => console.error("Ошибка при загрузке опроса:", error));
    }

    function displayAnswers(answers) {
        pollAnswersElement.innerHTML = "";

        // Отображаем варианты ответов в виде кнопок
        answers.forEach(answer => {
            const button = document.createElement("button");
            button.classList.add("poll__answer");
            button.textContent = answer;
            button.addEventListener("click", () => handleAnswerClick(answer));
            pollAnswersElement.appendChild(button);
        });
    }

    function handleAnswerClick(answer) {
        alert("Спасибо, ваш голос засчитан!");

        loadRandomPoll();
    }
});
