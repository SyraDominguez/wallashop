
const signupForm = document.querySelector('#register-form');

document.addEventListener('submit', (event) => {
  event.preventDefault();
  let errors = [];

  const email = signupForm.querySelector('#email');
  const emailRegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  if (!emailRegExp.test(email.value)) {
    errors.push('Email is not a valid email address')
  }

  const password = signupForm.querySelector('#password');
  const passwordConfirmation = signupForm.querySelector('#password-confirmation');
  if (password.value !== passwordConfirmation.value) {
    errors.push('Passwords do not match')
  }

  for (const error of errors) {
    alert(error)
  }

  if (error.lenght === 0) {

  }

})
