//Variables sa container
const account_container = document.getElementById('account_container');
const account_signup_btn = document.getElementById('account_signup_btn');
const account_login_btn = document.getElementById('account_login_btn');

//Variables sa sign up email
const signup_email = document.getElementById('signup_email');
const signup_btn = document.getElementById('signup_btn');
const signup_email_error = document.getElementById('signup_email_error');

//variable sa sign up password
const signup_password = document.getElementById('signup_password');
const signup_password2 = document.getElementById('signup_password2');
const signup_password_error = document.getElementById('signup_password_error');
const signup_password2_error = document.getElementById('signup_password2_error');

//panggalaw nung login signup container
account_signup_btn.addEventListener('click', () =>{
    account_container.classList.add("active");
});

account_login_btn.addEventListener('click', () =>{
    account_container.classList.remove("active");
});


//pangvalidate ng email 

function signUpEmailVerification()
{
    if(!signup_email.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/))
        {
            signup_email_error.style.display ='block';
            
        }
        else{
            signup_email_error.style.display ='none';
        }
}


//password validation
function signUpPasswordVerification(){
    if (signup_password.value.length<8 || signup_password.value.search(/[a-z]/) < 0 || signup_password.value.search(/[A-Z]/) < 0 || signup_password.value.search(/[0-9]/) < 0){
        signup_password_error.style.display ='block';
    }
    else{
        signup_password_error.style.display ='none';
    }
}

//match password
function signUpPasswordMatchVerification(){
    if (signup_password!=signup_password2){
        signup_password2_error.style.display ='block';
    }
    else
    {
        signup_password2_error.style.display ='none';
    }
}
//confirmpassword

//sign up button
signup_btn.addEventListener('click', (e) =>{
    e.preventDefault();
    signUpEmailVerification();
    signUpPasswordVerification();
    signUpPasswordMatchVerification();
});



//show password
function signup_reveal_password() {
    var signup_password = document.getElementById("signup_password");
  if (signup_password.type === "password") {
    signup_password.type = "text";
  } else {
    signup_password.type = "password";
  }
}

function signup_reveal_password2() {
    var signup_password = document.getElementById("signup_password2");
  if (signup_password.type === "password") {
    signup_password.type = "text";
  } else {
    signup_password.type = "password";
  }
}


<!-- SCRIPT NG POP UP -->
    function showPopup() {
        document.getElementById('product-popup').style.display = 'block';
        document.getElementById('backdrop').style.display = 'block'; 
    }

    function closePopup() {
        document.getElementById('product-popup').style.display = 'none';
        document.getElementById('backdrop').style.display = 'none'; 
    }

    // SCRIPT NG DECREASE AND INCREASE BUTTON SA POP UP
    function increaseQuantity() {
        var quantity = document.getElementById('order-quantity').innerText; 
        var newQuantity = parseInt(quantity) + 1; 
        document.getElementById('order-quantity').innerText = newQuantity; 
    }

    function decreaseQuantity() {
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



