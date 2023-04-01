const form = document.querySelector('.form');
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');


form.addEventListener('submit', (event) => {
 event.preventDefault();

 validateForm();
})

function validateForm() {
 // first name
 if (firstNameInput.value.trim() == '') {
  setError(firstNameInput, 'First Name cannot be empty');
 }else if(firstNameInput.value.trim().length < 3 || firstNameInput.value.trim().length > 20) {
  setError(firstNameInput, 'min 3 and max 20 characters')
 }else{
  setSuccess(firstNameInput);
 }
 // last name
 if (lastNameInput.value.trim() == '') {
  setError(lastNameInput, 'Last Name cannot be empty');
 }else if(lastNameInput.value.trim().length < 3 || lastNameInput.value.trim().length > 20) {
  setError(lastNameInput, 'min 3 and max 20 characters');
 }else{
  setSuccess(lastNameInput);
 }
 // email
  if (emailInput.value.trim() == '') {
  setError(emailInput, 'Email cannot be empty');
  }else if(isEmailValid(emailInput.value)) {
   setSuccess(emailInput);
  }else{
   setError(emailInput, 'Looks like this is not an email');
  }
 // password
 if (passwordInput.value.trim() == '') {
  setError(passwordInput, 'Password cannot be empty');
 }else if (passwordInput.value.trim().length <6 || passwordInput.value.trim().length > 20) {
  setError(passwordInput, 'Password must be min 6 and max 20 characters');
 }else{
  setSuccess(passwordInput);
 }
}


function setError(element, errorMessage) {
const parent = element.parentElement;
 if (parent.classList.contains('success')){
  parent.classList.remove('success');
 }

 parent.classList.add('error');
 const paragraph = parent.querySelector('.p');
 paragraph.textContent = errorMessage;
}

function setSuccess(element) {
 const parent = element.parentElement;
 if (parent.classList.contains('error')){
  parent.classList.remove('error');
 }

 parent.classList.add('success');
}


function isEmailValid(email) {
 const emailRegExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 return emailRegExp.test(email);
}