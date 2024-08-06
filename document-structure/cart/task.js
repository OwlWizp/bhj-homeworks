const cart = document.querySelector('.cart__products');
const plusControl = document.querySelectorAll('.product__quantity-control_inc');
const minusControl = document.querySelectorAll('.product__quantity-control_dec');
const addCart = document.querySelectorAll('.product__add');

Array.from(plusControl).forEach(plus => plus.addEventListener('click', moreCount));
Array.from(minusControl).forEach(minus => minus.addEventListener('click', lessCount));

function moreCount (e) {
    const value = this.parentElement.querySelector('.product__quantity-value');
    value.textContent = Number(value.textContent) + 1;
}

function lessCount (e) {
    const value = this.parentElement.querySelector('.product__quantity-value');
    if (Number(value.textContent) > 1) {
        value.textContent = Number(value.textContent) - 1;
    }
}

Array.from(addCart).forEach(addBtn => addBtn.addEventListener('click', cartAdder));

function cartAdder () {
    const product = this.closest('.product');
    const cartProducts = Array.from(document.querySelectorAll('.cart__product'));
    console.log(product.dataset.id)
    if(cartProducts.some((el)=> el.dataset.id === product.dataset.id)) {
        const existProduct = cartProducts.find((el)=> el.dataset.id === product.dataset.id);
        const value = existProduct.querySelector('.cart__product-count');
        value.textContent = Number(value.textContent) + Number(product.querySelector('.product__quantity-value').textContent);
        return
    }
    const productInCart = product.cloneNode(false);
    productInCart.className = 'cart__product';
    productInCart.innerHTML = `<img class="cart__product-image" src="${product.querySelector('.product__image').src}">
    <div class="cart__product-count">${product.querySelector('.product__quantity-value').textContent}</div>`
    cart.appendChild(productInCart);    
}