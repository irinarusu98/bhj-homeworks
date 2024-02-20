document.addEventListener('DOMContentLoaded', function() {
    const tooltipElements = document.querySelectorAll('.has-tooltip');
  
    // Добавляем обработчик события для каждого элемента
    tooltipElements.forEach(function(element) {
      element.addEventListener('click', function(event) {
        // Отменяем стандартное действие ссылки
        event.preventDefault();
  
        // Получаем текст подсказки из атрибута title
        const tooltipText = element.getAttribute('title');
  
        // Создаем элемент подсказки и добавляем текст
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = tooltipText;
  
        // Добавляем подсказку к телу документа
        document.body.appendChild(tooltip);
  
        // Устанавливаем положение подсказки относительно элемента
        const elementRect = element.getBoundingClientRect();
        tooltip.style.left = elementRect.left + 'px';
        tooltip.style.top = elementRect.bottom + 'px';
  
        // Добавляем класс для отображения подсказки
        tooltip.classList.add('tooltip_active');
  
        // Добавляем обработчик события для скрытия подсказки при клике вне нее
        document.addEventListener('click', function hideTooltipOutside(event) {
          if (!tooltip.contains(event.target) && !element.contains(event.target)) {
            // Удаляем подсказку и убираем обработчик события
            tooltip.remove();
            document.removeEventListener('click', hideTooltipOutside);
          }
        });
      });
    });
  });
  