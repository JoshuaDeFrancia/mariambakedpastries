    // SCRIPT NG POP UP SA BROWSE PRODUCT
    function showPopup() {
        document.getElementById('browse_product_popup').style.display = 'block';
        document.getElementById('backdrop').style.display = 'block'; 
    }

    function closePopup() {
        document.getElementById('browse_product_popup').style.display = 'none';
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
