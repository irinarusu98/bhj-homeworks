const loader = document.getElementById('loader');

// Загрузите данные о курсе валют, отправив GET-запрос по адресу
fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then(response => response.json())
    .then(data => {
        // скройте анимацию загрузки
        loader.classList.remove('loader_active');

        const itemsContainer = document.getElementById('items');

        // Все данные о курсе валют необходимо подгрузить в элемент #items
        for (const currencyCode in data.response.Valute) {
            const currency = data.response.Valute[currencyCode];

            const itemElement = document.createElement('div');
            itemElement.classList.add('item');

            //  в .item__code нужно подгрузить значение свойства CharCode, в .item__value - Value
            const codeElement = document.createElement('div');
            codeElement.classList.add('item__code');
            codeElement.textContent = currency.CharCode;
            itemElement.appendChild(codeElement);

            const valueElement = document.createElement('div');
            valueElement.classList.add('item__value');
            valueElement.textContent = currency.Value;
            itemElement.appendChild(valueElement);

            itemsContainer.appendChild(itemElement);
        }
    })
    .catch(error => {
        console.error('Ошибка загрузки данных:', error);
        loader.classList.remove('loader_active');
    });
