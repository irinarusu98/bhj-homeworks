document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.product');
    const cart = document.querySelector('.cart__products');

    productCards.forEach(productCard => {
        const quantityValue = productCard.querySelector('.product__quantity-value');
        const addToCartButton = productCard.querySelector('.product__add');
        const productId = productCard.getAttribute('data-id');

        addToCartButton.addEventListener('click', function () {
            const quantity = parseInt(quantityValue.textContent);

            // Поиск товара в корзине
            const existingCartItem = cart.querySelector(`.cart__product[data-id="${productId}"]`);

            if (existingCartItem) {
                // Увеличение количества, если товар уже в корзине
                const existingCartProductCount = existingCartItem.querySelector('.cart__product-count');
                existingCartProductCount.textContent = parseInt(existingCartProductCount.textContent) + quantity;
            } else {
                // Добавление нового товара в корзину
                const cartProduct = document.createElement('div');
                cartProduct.classList.add('cart__product');
                cartProduct.setAttribute('data-id', productId);

                const productImage = productCard.querySelector('.product__image');
                const cartProductImage = document.createElement('img');
                cartProductImage.classList.add('cart__product-image');
                cartProductImage.setAttribute('src', productImage.getAttribute('src'));
                cartProduct.appendChild(cartProductImage);

                const cartProductCount = document.createElement('div');
                cartProductCount.classList.add('cart__product-count');
                cartProductCount.textContent = quantity;
                cartProduct.appendChild(cartProductCount);

                cart.appendChild(cartProduct);
            }

            // Сброс количества в карточке товара
            quantityValue.textContent = '1';
        });

        const quantityControlInc = productCard.querySelector('.product__quantity-control_inc');
        const quantityControlDec = productCard.querySelector('.product__quantity-control_dec');

        quantityControlInc.addEventListener('click', function () {
            incrementQuantity();
        });

        quantityControlDec.addEventListener('click', function () {
            decrementQuantity();
        });

        function incrementQuantity() {
            let currentQuantity = parseInt(quantityValue.textContent);
            if (currentQuantity < 999) {
                quantityValue.textContent = currentQuantity + 1;
            }
        }

        function decrementQuantity() {
            let currentQuantity = parseInt(quantityValue.textContent);
            if (currentQuantity > 1) {
                quantityValue.textContent = currentQuantity - 1;
            }
        }
    });
});
