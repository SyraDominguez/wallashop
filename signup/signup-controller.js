import { loaderController } from "../loader/loader-controller.js";
import { dispatchEvent } from "../utils/dispatchEvent.js"
import { createUser } from "./signup-model.js";



export function signupController(signupForm) {

  const spinner = signupForm.querySelector('#spinner');

  const { showLoader, hideLoader } = loaderController(spinner)

  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    handleSignupFormSubmit(signupForm);
  })

  function handleSignupFormSubmit(signupForm) {
    let errors = [];

    if (!isEmailValid(signupForm)) {
      errors.push('Email is not a valid email address')
    }

    if (!arePasswordsEqual(signupForm)) {
      errors.push('Passwords do not match')
    }

    showFormErrors(errors);

    if (errors.length === 0) {
      signupUser(signupForm);
    }

  }

  function isEmailValid(signupForm) {
    const email = signupForm.querySelector('#email');
    const emailRegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    return emailRegExp.test(email.value)
  }

  function arePasswordsEqual(signupForm) {
    const password = signupForm.querySelector('#password');
    const passwordConfirmation = signupForm.querySelector('#password-confirmation');

    return password.value === passwordConfirmation.value
  }

  function showFormErrors(errors) {
    for (const error of errors) {
      dispatchEvent('signup-notification', {
        message: error,
        type: 'error'
      }, signupForm)
    }
  }

  async function signupUser(signupForm) {
    const email = signupForm.querySelector('#email');
    const password = signupForm.querySelector('#password');

    try {
      showLoader();
      await createUser(email.value, password.value)

      dispatchEvent('signup-notification', {
        message: ("User created successfully. ✅  Welcome! It's good that you are here!"),
        type: 'success'
      }, signupForm)
      setTimeout(() => {
        window.location = './index.html';
      }, 2000)
    } catch (error) {
      dispatchEvent('signup-notification', {
        message: error,
        type: 'error'
      }, signupForm)
    } finally {
      hideLoader();
    }
  }

}

