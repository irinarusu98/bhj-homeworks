
// Функция для переключения видимости списка
function toggleDropdown(dropdown) {
  let dropdownList = dropdown.querySelector('.dropdown__list');
  dropdownList.classList.toggle('dropdown__list_active');
}

// Функция для выбора элемента и закрытия списка
function selectItem(dropdown, value) {
  let dropdownValue = dropdown.querySelector('.dropdown__value');
  dropdownValue.textContent = value;
  toggleDropdown(dropdown); // Закрываем список после выбора элемента
}

// Запрещаем переход по ссылке для всех элементов с классом dropdown__link
Array.from(document.getElementsByClassName('dropdown__link')).forEach(function(link) {
  link.addEventListener('click', function(event) {
      event.preventDefault();
  });
});

// Добавляем обработчик события для каждой кнопки dropdown
Array.from(document.getElementsByClassName('dropdown')).forEach(function(dropdown) {
  let dropdownValue = dropdown.querySelector('.dropdown__value');
  dropdownValue.addEventListener('click', function() {
      toggleDropdown(dropdown);
  });

  // Добавляем обработчик события для каждого пункта списка
  Array.from(dropdown.getElementsByClassName('dropdown__link')).forEach(function(link) {
      link.addEventListener('click', function() {
          let value = this.textContent;
          selectItem(dropdown, value);
      });
  });
});
