document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.getElementById("signin__form");
    const signInBtn = document.getElementById("signin__btn");
    const welcomeBlock = document.getElementById("welcome");
    const userIdSpan = document.getElementById("user_id");

    // Если в хранилище уже есть id польз., отображаем блок приветствия
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
        welcomeBlock.classList.add("welcome_active");
        userIdSpan.textContent = storedUserId;
    }

    // Обрабатываем событие чтобы отпрвить форму
    signInBtn.addEventListener("click", function (event) {
        event.preventDefault();

        // Получаем значения логина и пароля из формы
        const login = signInForm.querySelector('[name="login"]').value;
        const password = signInForm.querySelector('[name="password"]').value;

        // Реализуйте механизм авторизации. Для этого передайте данные формы с помощью POST-запроса по адресу 
        fetch("https://students.netoservices.ru/nestjs-backend/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ login, password }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // После успешного входа, сохраните полученный id-пользователя в локальное хранилище
                    localStorage.setItem("userId", data.user_id);
                    welcomeBlock.classList.add("welcome_active");
                    userIdSpan.textContent = data.user_id;
                } else {
                    // Если авторизация не удалась, выведите сообщение «Неверный логин/пароль»
                    alert("Неверный логин/пароль");
                }
            })
            .catch(error => console.error("Ошибка при отправке запроса:", error));
    });
});
