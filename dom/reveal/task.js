document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll('.reveal');

    // Отслеживайте изменение прокрутки окна 
    const revealOnScroll = () => {
        revealElements.forEach(revealElement => {
            // Получаем координаты элемента относительно видимой области окна
            const revealPosition = revealElement.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            //При нахождении элемента в поле зрения, присвойте этому элементу класс reveal_active
            if (revealPosition < windowHeight) {
                revealElement.classList.add('reveal_active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);

    revealOnScroll();
});
