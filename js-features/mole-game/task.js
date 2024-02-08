(() => {
    let playing = true,
        activeHole = 1,
        hitsCount = 0,
        missesCount = 0;

    // напишите функцию getHole( index ), которая по индексу будет возвращать нужный элемент
    const getHole = index => document.getElementById(`hole${index}`);

    // убираем крота из лунки
    const deactivateHole = index => getHole(index).classList.remove('hole_has-mole');

    // добавляем крота в новую лунку
    const activateHole = index => getHole(index).classList.add('hole_has-mole');

    // Функция обновления счета на странице
    updateScores = () => {
        document.getElementById('dead').innerText = hitsCount;
        document.getElementById('lost').innerText = missesCount;
    },

        // Функция обработки клика по лунке
        handleMoleClick = (index) => {
            if (playing && getHole(index).classList.contains('hole_has-mole')) {
                hitsCount++;         // Если кликнули на лунку с кротом 
            } else {
                missesCount++;      // Если промахнулись
            }

            updateScores();          // Обновляем счет

            // Проверяем условия и сбрасываем счетчики и начало новой игры
            if (hitsCount === 10) {
                alert('Поздравляем, вы выиграли!');
                resetGame();
            } else if (missesCount === 5) {
                alert('Игра окончена. Вы проиграли.');
                resetGame();
            }
        },

        // Сброс игры
        resetGame = () => {
            hitsCount = 0;
            missesCount = 0;
            updateScores();
            startNewRound();
        },

        // Начинается новый раунд
        startNewRound = () => {
            deactivateHole(activeHole);                             // Деактивируем текущую лунку
            activeHole = Math.floor(1 + Math.random() * 9);       // Генерируем новый индекс для лунки с кротом
            activateHole(activeHole);                             // Активируем новую лунку с кротом
        },

        // Функция инициализации игры
        initGame = () => {
            // Навешиваем обработчик на каждую лунку
            for (let i = 1; i <= 9; i++) {
                getHole(i).addEventListener('click', () => handleMoleClick(i));
            }

            startNewRound();
        };

    initGame(); // Инициализация игры при загрузке страницы
})();









