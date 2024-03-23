import { notificationController } from "./notification/notification-controller.js";
import { signupController } from "./signup/signup-controller.js";

const signupForm = document.querySelector('#register-form');
const notification = document.querySelector('#notification');


signupForm.addEventListener('signup-notification', (event) => {
  event.stopPropagation()
  showNotification(event.detail.message, event.detail.type)
})

const { showNotification } = notificationController(notification);

signupController(signupForm);

