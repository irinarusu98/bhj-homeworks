// напишите функцию getHole( index ), которая по индексу будет возвращать нужный элемент
const getHole = index => document.getElementById(`hole${index}`);

// убираем крота из лунки
const deactivateHole = index => getHole(index).classList.remove('hole_has-mole');

// добавляем крота в новую лунку
const activateHole = index => getHole(index).classList.add('hole_has-mole');

// Проверяем был ли клик по лунке
const handleMoleClick = (index) => {
    if (playing && getHole(index).classList.contains('hole_has-mole')) {
        // Если кликнули на лунку с кротом
        deadCount++;
        updateScores();
        deactivateHole(index);
        activeHole = Math.floor(1 + Math.random() * 9);
        activateHole(activeHole);
        checkGameOver();
    } else {       // Если кликнули, но промахнулись
        lostCount++;
        updateScores();
    }
};

// Запуск игры
const initGame = () => {
    const playRound = () => {
        deactivateHole(activeHole);                          // Деактивируем текущую лунку с кротом
        activeHole = Math.floor(1 + Math.random() * 9);     // Генерируем новый индекс для лунки с кротом
        activateHole(activeHole);                           // Активируем новую лунку с кротом
    };

    playRound();
};

initGame();
