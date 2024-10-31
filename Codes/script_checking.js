    // SCRIPT NG POP UP SA BROWSE PRODUCT
    function showPopup() {
        document.getElementById('product-popup').style.display = 'block';
        document.getElementById('backdrop').style.display = 'block'; 
    }

    function closePopup() {
        document.getElementById('product-popup').style.display = 'none';
        document.getElementById('backdrop').style.display = 'none'; 
    }

    // SCRIPT NG DECREASE AND INCREASE BUTTON SA POP UP SA BROWSE
    function Browse_add_Quantity() {
        var quantity = document.getElementById('order-quantity').innerText; 
        var newQuantity = parseInt(quantity) + 1; 
        document.getElementById('order-quantity').innerText = newQuantity; 
    }

    function Browse_minus_Quantity() {
        var quantity = document.getElementById('order-quantity').innerText; 
        var newQuantity = Math.max(parseInt(quantity) - 1, 0); 
        document.getElementById('order-quantity').innerText = newQuantity; 
    }

    function selectQuantity(type) {
        const buttons = document.querySelectorAll('.quantity-btn');
        buttons.forEach(button => {
            button.classList.remove('selected'); 
        });

        if (type === 'half') {
            buttons[0].classList.add('selected');
        } else if (type === 'dozen') {
            buttons[1].classList.add('selected');
        }
    }

    const checkboxes = document.querySelectorAll('.category-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                checkboxes.forEach(cb => {
                    if (cb !== this) {
                        cb.checked = false;
                    }
                });
            }
        });
    });




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

//SCRIPT NG POP UP SA PRODUCT LIST ADMIN
function showPopup(productId) {
    document.getElementById("popup-id").innerText = productId;
    document.getElementById("popup").style.display = "flex";
  }
  

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
// SCRIPT NG POP UP ADMIN SA PRODUCT LIST
function showPopup(id) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-id").textContent = id;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

document.querySelector('.product-id').addEventListener('click', function () {
    showPopup('PROD01');
});

