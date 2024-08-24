const account_container = document.getElementById('account_container');
const account_signup_btn = document.getElementById('account_signup_btn');
const account_login_btn = document.getElementById('account_login_btn');

account_signup_btn.addEventListener('click', () =>{
    account_container.classList.remove("active");
});

account_login_btn.addEventListener('click', () =>{
    account_container.classList.add("active");
});
