// SCRIPT NG CART
// SCRIPT SA CART SA PAG INCREASE NG ORDER QUANTITY 
function increaseQuantity(event) {
    const orderQuantityElement = event.target.parentNode.querySelector('.order-quantity-value');
    let currentQuantity = parseInt(orderQuantityElement.innerText);
    orderQuantityElement.innerText = currentQuantity + 1;
    updateTotalPrice(); // Update total price after increasing quantity
}

// SCRIPT SA CART SA PAG DECREASE NG ORDER QUANTITY
function decreaseQuantity(event) {
    const orderQuantityElement = event.target.parentNode.querySelector('.order-quantity-value');
    let currentQuantity = parseInt(orderQuantityElement.innerText);
    if (currentQuantity > 0) {
        orderQuantityElement.innerText = currentQuantity - 1;
        updateTotalPrice(); // Update total price after decreasing quantity
    }
}

// SCRIPT SA CART YUNG PAG HANDLE NG HALF DOZEN PATI ONE DOZEN 
function selectProductQuantity(event) {
    const buttons = event.target.parentNode.querySelectorAll('.quantity-btn');
    buttons.forEach(button => button.classList.remove('selected'));
    event.target.classList.add('selected');
}

// SCRIPT SA CART SA PAG REMOVE NG ITEM SA CART 
function removeCartItem(event) {
    const cartItem = event.target.closest('.cart-item');
    cartItem.remove();
    updateTotalPrice(); 
}

function updateTotalPrice() {
    let totalPrice = 0;
    document.querySelectorAll('.cart-item').forEach(cartItem => {
        const priceText = cartItem.querySelector('.cart-price').innerText;
        const price = parseFloat(priceText.replace('Price: ₱', '').split('-')[0]); 
        const quantityText = cartItem.querySelector('.order-quantity-value').innerText;
        const quantity = parseInt(quantityText);

        totalPrice += price * quantity; 
    });
    document.querySelector('.cart_total-price span').innerText = `Total: ₱${totalPrice.toFixed(2)}`;
}

function changeButtonColor(event) {
    const buttons = document.querySelectorAll('.cart-buttons button');
    buttons.forEach(button => button.classList.remove('active')); 
    event.target.classList.add('active'); 
}

document.querySelector('.voucher-btn').addEventListener('click', changeButtonColor);
document.querySelector('.order-btn').addEventListener('click', changeButtonColor);

document.querySelectorAll('.quantity-increase').forEach(button => {
    button.addEventListener('click', increaseQuantity);
});

document.querySelectorAll('.quantity-decrease').forEach(button => {
    button.addEventListener('click', decreaseQuantity);
});

document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', selectProductQuantity);
});

document.querySelectorAll('.cart_remove-item').forEach(button => {
    button.addEventListener('click', removeCartItem);
});

updateTotalPrice();


function openVoucherPopup() {
    document.querySelector('.voucher-popup').style.display = 'block';
}


function closeVoucherPopup() {
    document.querySelector('.voucher-popup').style.display = 'none';
}


document.querySelector('.voucher-btn').addEventListener('click', openVoucherPopup);


document.querySelector('.close-voucher-popup').addEventListener('click', closeVoucherPopup);


window.addEventListener('click', function(event) {
    const popup = document.querySelector('.voucher-popup');
    if (event.target === popup) {
        closeVoucherPopup();
    }
});

// SCRIPT SA CART YUNG PAG HANDLE NG HALF DOZEN PATI ONE DOZEN 
function selectProductQuantity(event) {
    const buttons = event.target.parentNode.querySelectorAll('.quantity-btn');
    buttons.forEach(button => button.classList.remove('selected'));
    event.target.classList.add('selected');
}

// SCRIPT SA CART SA PAG REMOVE NG ITEM SA CART 
function removeCartItem(event) {
    const cartItem = event.target.closest('.cart-item');
    cartItem.remove();
    updateTotalPrice(); 
}



// SCRIPT NG POP UP SA CART
function updateTotalPrice() {
    let totalPrice = 0;
    document.querySelectorAll('.cart-item').forEach(cartItem => {
        const priceText = cartItem.querySelector('.cart-price').innerText;
        const price = parseFloat(priceText.replace('Price: ₱', '').split('-')[0]); 
        const quantityText = cartItem.querySelector('.order-quantity-value').innerText;
        const quantity = parseInt(quantityText);

        totalPrice += price * quantity; 
    });
    document.querySelector('.cart_total-price span').innerText = `Total: ₱${totalPrice.toFixed(2)}`;
}

function changeButtonColor(event) {
    const buttons = document.querySelectorAll('.cart-buttons button');
    buttons.forEach(button => button.classList.remove('active')); 
    event.target.classList.add('active'); 
}

document.querySelector('.voucher-btn').addEventListener('click', changeButtonColor);
document.querySelector('.order-btn').addEventListener('click', changeButtonColor);

document.querySelectorAll('.quantity-increase').forEach(button => {
    button.addEventListener('click', increaseQuantity);
});

document.querySelectorAll('.quantity-decrease').forEach(button => {
    button.addEventListener('click', decreaseQuantity);
});

document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', selectProductQuantity);
});

document.querySelectorAll('.cart_remove-item').forEach(button => {
    button.addEventListener('click', removeCartItem);
});

updateTotalPrice(); 
