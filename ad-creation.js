import { adCreationController } from "./ads-creation/ad-creation-controller.js";


document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');

  if (!token) {
    alert('You must to login first to create a new ad')
    window.location.href = ('/');
  }

  const adCreation = document.querySelector('#adCreation');
  adCreationController(adCreation);
});

