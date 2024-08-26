//Variables sa container
const account_container = document.getElementById('account_container');
const account_signup_btn = document.getElementById('account_signup_btn');
const account_login_btn = document.getElementById('account_login_btn');
//Variables sa sign up email
const signup_email = document.getElementById('signup_email');
const signup_btn = document.getElementById('signup_btn');
const signup_email_error = document.getElementById('signup_email_error');

//variable sa sign up password

//panggalaw nung login signup container
account_signup_btn.addEventListener('click', () =>{
    account_container.classList.add("active");
});

account_login_btn.addEventListener('click', () =>{
    account_container.classList.remove("active");
});


//pangvalidate ng email 

const showError = () => {
    signup_email_error.style.display ='block';
}

signup_btn.addEventListener('click', (e) =>{
    e.preventDefault();
    if(!signup_email.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/))
    {
        return showError();
    }

    console.log('success');
});

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
