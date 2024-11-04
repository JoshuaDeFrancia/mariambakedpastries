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
const signup2_password_error = document.getElementById('signup2_password_error');

//panggalaw nung login signup container
account_signup_btn.addEventListener('click', () =>{
    account_container.classList.add("active");
});

account_login_btn.addEventListener('click', () =>{
    account_container.classList.remove("active");
});


//pangvalidate ng email

let signup_email_valid = false;

function signUpEmailVerification()
{
    if(!signup_email.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/))
        {
            signup_email_error.style.display ='block';
            
        }
        else{
            signup_email_error.style.display ='none';
            signup_email_valid = true;
        }
}

let signup_password_valid = false;
//password validation
function signUpPasswordVerification(){
    if (signup_password.value.length<8 || signup_password.value.search(/[a-z]/) < 0 
    || signup_password.value.search(/[A-Z]/) < 0 || signup_password.value.search(/[0-9]/) < 0){
        signup_password_error.style.display ='block';
    }
    else{
        signup_password_error.style.display ='none';
        signup_password_valid = true;
    }
}


let signup_password_match_valid = false;
//match password
function signUpPasswordMatchVerification(){

    const signup_password_value = signup_password.value;
    const signup_password_value2 = signup_password2.value;
    if (signup_password_value!==signup_password_value2){
        signup2_password_error.style.display ='block';
        
    }
    else
    {
        signup2_password_error.style.display ='none';
        signup_password_match_valid = true;

    }
}


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

//PROGRESS BAR

const signup_slidePage = document.querySelector(".signup_slidePage");
const signup_firstNextBtn = document.querySelector(".signup_nextBtn");
const signup_secondPrevBtn = document.querySelector(".account_prev_1");
const signup_secondNextBtn = document.querySelector(".account_next_1");
const signup_thirdPrevBtn = document.querySelector(".account_prev_2");
const signup_submit = document.querySelector(".signup_submitbutton");


signup_firstNextBtn.addEventListener("click", function(){

    if (signup_email_valid==true&&
        signup_password_valid == true&&
        signup_password_match_valid == true

    ){
        signup_slidePage.style.marginLeft = "-28%";
    }
    
    
});

signup_secondPrevBtn.addEventListener("click", function(){


    signup_slidePage.style.marginLeft = "5%";
    
});

signup_thirdPrevBtn.addEventListener("click", function(){
    signup_slidePage.style.marginLeft = "5%";
});



//REGISTRATION PAGE VALIDATION

const signup_registration_error = document.getElementById('signup_registration_error');
const signup_age_error = document.getElementById('signup_age_error');

//firstrow
const signup_registration_lastname = document.getElementById('signup_registration_lastname');
const signup_registration_firstname = document.getElementById('signup_registration_firstname');
const signup_registration_middlename = document.getElementById('signup_registration_middlename');
const signup_registration_calendar = document.getElementById('signup_registration_calendar');
const signup_registration_gender = document.getElementById('signup_registration_gender');
const signup_registration_nationality = document.getElementById('signup_registration_nationality');
const  signup_registration_status = document.getElementById('signup_registration_status');
const signup_registration_religion = document.getElementById('signup_registration_religion');
const signup_registration_phone = document.getElementById('signup_registration_phone');
const signup_btn_next_1 = document.getElementById('signup_btn_next_1');




let signup_registration_valid=false;

function signup_validate_registration(){

    //Validate last name
    if(signup_registration_lastname.value.search(/[a-z]/) < 0 
    || signup_registration_lastname.value.search(/[A-Z]/) < 0
    || signup_registration_lastname.value.search(/[0-9]/) > 0
    ){
        signup_registration_lastname.style.border = "solid red";

    }
    else{
        signup_registration_lastname.style.border = "solid 1px #ced4da";
    }

    //validate first name
    if(signup_registration_firstname.value.search(/[a-z]/) < 0 
    || signup_registration_firstname.value.search(/[A-Z]/) < 0
    || signup_registration_firstname.value.search(/[0-9]/) > 0){
        
        signup_registration_firstname.style.border = "solid red";
    }
    else{
        signup_registration_firstname.style.border = "solid 1px #ced4da";
    }

    //Validate middle name
    if(signup_registration_middlename.value|| signup_registration_middlename.value.trim() !== "")
    {
        if (signup_registration_middlename.value.search(/[0-9]/) !== -1)
        {
        signup_registration_middlename.style.border = "solid red";
        }
        else{
            signup_registration_middlename.style.border = "solid 1px #ced4da";
        }
    }

    //Validate ng gender
    if(!signup_registration_gender.value||signup_registration_gender.value==="")
    {
        signup_registration_gender.style.border = "solid red";
    }
    else{
        signup_registration_gender.style.border = "solid 1px #ced4da";
    }

    //validate ng status
    if(!signup_registration_status.value||signup_registration_status.value==="")
    {
        signup_registration_status.style.border = "solid red";
    }
    else{
        signup_registration_status.style.border = "solid 1px #ced4da";
    }

    // validate ng nationality
    
    if(!signup_registration_nationality.value||signup_registration_nationality.value==="")
        {
            signup_registration_nationality.style.border = "solid red";
        }
    else{
            signup_registration_nationality.style.border = "solid 1px #ced4da";
    }

    //validation ng religion
    signup_registration_religion
    if(!signup_registration_religion.value||signup_registration_religion.value==="")
        {
            signup_registration_religion.style.border = "solid red";
        }
    else{
            signup_registration_religion.style.border = "solid 1px #ced4da";
    }

    if(!signup_registration_phone.value||signup_registration_phone.value===""
        ||signup_registration_phone.value.length<10||signup_registration_phone.value.search(/[A-Z]/) !== -1
        || signup_registration_phone.value.search(/[A-Z]/) !== -1)
    {
        
            signup_registration_phone.style.border = "solid red";
        
    }
    else{
        signup_registration_phone.style.border = "solid 1px #ced4da";
    }


    if (signup_registration_lastname.style.border !== "solid red" &&
        signup_registration_firstname.style.border !== "solid red" &&
        signup_registration_middlename.style.border !== "solid red" &&
        signup_registration_calendar.style.border !== "solid red"&&
        signup_registration_gender.style.border !== "solid red"&&
        signup_registration_status.style.border !== "solid red"&&
        signup_registration_nationality.style.border !== "solid red"&&
        signup_registration_religion.style.border !== "solid red"&&
        signup_registration_phone.style.border !== "solid red") {
        signup_registration_valid = true;
    } else {
        signup_registration_valid = false;
    }
    
}


//validate ng birthday and age 
let signup_registration_calendar_valid = false;
function signup_validate_calendar(){
    const calendar = signup_registration_calendar.value;
    

    if (!calendar){
        signup_registration_calendar.style.border = "solid red";
    }
    else{
        const agechecker = new Date(calendar);
        const today = new Date();

         let age = today.getFullYear() - agechecker.getFullYear();
        const monthdiff = today.getMonth() - agechecker.getMonth();

        if(monthdiff<0||(monthdiff ===0 &&today.getDate()<agechecker.getDate())){
        age--;
        }

        if (age<13){
            signup_registration_calendar.style.border = "solid red";
        }
        else{
            signup_registration_calendar_valid=true;
        }
    }
    
}



//Nationality drop down shit tangina nitong puta na to
async function loadNationalities() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();

    countries.sort((a, b) => {
        const nameA = a.name.common.toLowerCase(); 
        const nameB = b.name.common.toLowerCase();
        if (nameA < nameB) return -1; 
        if (nameA > nameB) return 1;  
        return 0; 
    });

    const nationalityDropdown = document.getElementById('signup_registration_nationality');

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.cca2; // Use the country code or name
        option.textContent = country.name.common; // Display the name
        nationalityDropdown.appendChild(option);
    });
}
document.addEventListener('DOMContentLoaded', loadNationalities);

//Pagvalidate lang ng data sa personal info
signup_btn_next_1.addEventListener('click', (e) =>{
    e.preventDefault();
    signup_validate_registration();
    signup_validate_calendar();
    signup_validate_age();
});

signup_secondNextBtn.addEventListener("click", function(){

    // signup_slidePage.style.marginLeft = "-60%";
    if (signup_registration_valid==true&&signup_registration_calendar_valid==true)
    {
        signup_slidePage.style.marginLeft = "-60%";
    }
    
    
});


//Default address
const signup_registration_Address1 = document.getElementById('signup_registration_Address1');
const signup_registration_Address2 = document.getElementById('signup_registration_Address2');
const signup_registration_barangay = document.getElementById('signup_registration_barangay');
const signup_registration_city = document.getElementById('signup_registration_city');
const signup_registration_province = document.getElementById('signup_registration_province');
const signup_registration_country = document.getElementById('signup_registration_country');
const signup_registration_zipcode = document.getElementById('signup_registration_zipcode');
const signup_btn_next_2 = document.getElementById('signup_btn_next_2');

//Pagvalidate ng address

let signup_address_valid = false;
function signUpAddressVerification(){
   
    if(!signup_registration_Address1||signup_registration_Address1.value===""){
        signup_registration_Address1.style.border = "solid red";
    }
    else
    {
        signup_registration_Address1.style.border = "solid 1px #ced4da";
    }
    if(!signup_registration_barangay||signup_registration_barangay.value==="")
    {
        signup_registration_barangay.style.border = "solid red";
    }
    else{
        signup_registration_barangay.style.border = "solid 1px #ced4da";
    }
    if (!signup_registration_city||signup_registration_city.value===""){
        signup_registration_city.style.border = "solid red";
    }
    else{
        signup_registration_city.style.border = "solid 1px #ced4da";
    }
    if(!signup_registration_province||signup_registration_province.value===""){
        signup_registration_province.style.border = "solid red";
    }
    else{
        signup_registration_province.style.border = "solid 1px #ced4da";
    }
    if(!signup_registration_country||signup_registration_country.value===""){
        signup_registration_country.style.border = "solid red";
    }
    else{
        signup_registration_country.style.border = "solid 1px #ced4da";
    }
    if(!signup_registration_zipcode||signup_registration_zipcode.value.length<4||
        signup_registration_zipcode.value.search(/[A-Z]/) !== -1
        || signup_registration_zipcode.value.search(/[A-Z]/) !== -1
    ){
        signup_registration_zipcode.style.border = "solid red";
    }
    else{
        signup_registration_zipcode.style.border = "solid 1px #ced4da";
    }

    if ( signup_registration_Address1.style.border !== "solid red"&& signup_registration_barangay.style.border !== "solid red"
        &&signup_registration_city.style.border !== "solid red"&& signup_registration_province.style.border !== "solid red"
        &&signup_registration_country.style.border !== "solid red"&&  signup_registration_zipcode.style.border !== "solid red"
    )
    {
        signup_address_valid = true;
    }
    else
    {
        signup_address_valid = false;
    }
    
}
//countryshit
async function loadCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();

    countries.sort((a, b) => {
        const nameA = a.name.common.toLowerCase(); 
        const nameB = b.name.common.toLowerCase();
        if (nameA < nameB) return -1; 
        if (nameA > nameB) return 1;  
        return 0; 
    });

    const countriesDropdown = document.getElementById('signup_registration_country');

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.cca2; // Use the country code or name
        option.textContent = country.name.common; // Display the name
        countriesDropdown.appendChild(option);
    });
}
document.addEventListener('DOMContentLoaded', loadCountries);

signup_btn_next_2.addEventListener('click', (e) =>{
    e.preventDefault();
    signUpAddressVerification();
    if (signup_address_valid==true){
        window.location.href = "home_screen.html";
    }
});




     // SCRIPT NG POP UP SA BROWSE PRODUCT
    function showBrowseProductPopup() {
        document.getElementById('browse_product_popup').style.display = 'block';
        document.getElementById('backdrop').style.display = 'block'; 
    }

    function closeBrowseProductPopup() {
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


//POPOUT SA ORDER REQUEST DETAILS
function showOrderRequestDetails(){
    document.getElementById('OrderRequestPopUp').style.display = 'block';
    document.getElementById('backdrop').style.display = 'block';
    
}

function closeOrderRequestDetails(){
    document.getElementById('OrderRequestPopUp').style.display = 'none';
    document.getElementById('backdrop').style.display = 'none';
    
}

function clickAllCheckbox(source){
    const checkbox = document.querySelectorAll('.adminCheckbox');
    checkbox.forEach(checkbox=>{
        checkbox.checked = source.checked;
    });

}


//pang lagay lang ng info sa customers

function storeCustomerID(customerID) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "?CustomerID=" + customerID, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const userData = JSON.parse(xhr.responseText);

            displayCustomerDetails(userData);
        }
    };
    xhr.send();
}
function displayCustomerDetails(userData) {

    document.getElementById("UserDetailsID").textContent = userData.CustomerID;
    document.getElementById("UserDetailsLastName").textContent = userData.LastName;
    document.getElementById("UserDetailsMiddleName").textContent = userData.MiddleName;
    document.getElementById("UserDetailsFirstName").textContent = userData.FirstName;
    document.getElementById("UserDetailsContact").textContent = userData.ContactNum;
    document.getElementById("UserDetailsEmail").textContent = userData.ContactNum;
    document.getElementById("UserDetailsAddress1").textContent = userData.Address1;
    document.getElementById("UserDetailsAddress2").textContent = userData.Address2;
    document.getElementById("UserDetailsBarangay").textContent = userData.Barangay;
    document.getElementById("UserDetailsCity").textContent = userData.City;
    document.getElementById("UserDetailsProvince").textContent = userData.Province;
    document.getElementById("UserDetailsCountry").textContent = userData.Country;
    document.getElementById("UserDetailsZipCode").textContent = userData.ZipCode;
    document.getElementById("UserDetailsBirthday").textContent = userData.Birthday;
    document.getElementById("UserDetailsAge").textContent = userData.Age;
    document.getElementById("UserDetailsGender").textContent = userData.Gender;
    document.getElementById("UserDetailsStatus").textContent = userData.Status;
    document.getElementById("UserDetailsReligion").textContent = userData.Religion;
    document.getElementById("UserDetailsNationality").textContent = userData.Nationality;
}



  
// SCRIPT NG POP UP ADMIN SA PRODUCT LIST
function showProductListPopup(productId) {
    const popup = document.getElementById("product_list_popup");
    const idElement = document.getElementById("product_list_popup-id");
    idElement.innerText = productId;
    popup.style.display = "flex";
  }
  
  function closeProductListPopup() {
    const popup = document.getElementById("product_list_popup");
    popup.style.display = "none";
  }





