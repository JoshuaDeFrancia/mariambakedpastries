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




