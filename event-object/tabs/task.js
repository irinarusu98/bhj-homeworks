document.addEventListener('DOMContentLoaded', function () {
    // Получаем все элементы с классом tab и tab__content
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab__content'); 

    // Добавляем обработчик события для каждой вкладки
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function () {
            // Удаляем активный класс у всех вкладок и их содержимого
            tabs.forEach(t => t.classList.remove('tab_active'));
            tabContents.forEach(content => content.classList.remove('tab__content_active'));

            // Добавляем активный класс текущей вкладке и ее содержимому
            tab.classList.add('tab_active');
            tabContents[index].classList.add('tab__content_active');
        });
    });
});






// Сделайте акцент на том, что таких механизмов переключения может быть несколько на странице


// document.addEventListener('DOMContentLoaded', function () {
//     // Получаем все элементы с классом tab__navigation
//     const tabNavigations = document.querySelectorAll('.tab__navigation');

//     // Добавляем обработчик события для каждого набора вкладок
//     tabNavigations.forEach(tabNavigation => {
//         // Получаем все элементы с классом tab в текущем наборе
//         const tabs = tabNavigation.querySelectorAll('.tab');
//         // Получаем все элементы с классом tab__content в текущем наборе
//         const tabContents = document.querySelectorAll(`.tab__contents[data-tabs-id="${tabNavigation.dataset.tabsId}"] .tab__content`);

//         // Добавляем обработчик события для каждой вкладки в текущем наборе
//         tabs.forEach((tab, index) => {
//             tab.addEventListener('click', function () {
//                 // Удаляем активный класс у всех вкладок и их содержимого в текущем наборе
//                 tabs.forEach(t => t.classList.remove('tab_active'));
//                 tabContents.forEach(content => content.classList.remove('tab__content_active'));

//                 // Добавляем активный класс текущей вкладке и ее содержимому в текущем наборе
//                 tab.classList.add('tab_active');
//                 tabContents[index].classList.add('tab__content_active');
//             });
//         });
//     });
// });
