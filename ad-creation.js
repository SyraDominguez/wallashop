import { adCreationController } from "./ads-creation/ad-creation-controller.js";


document.addEventListener('DOMContentLoaded', () => {
  const adCreation = document.querySelector('#adCreation');
  adCreationController(adCreation);
});
