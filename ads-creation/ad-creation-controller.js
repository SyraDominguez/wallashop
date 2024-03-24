import { notificationController } from "../notification/notification-controller.js";
import { adCreate } from "./ad-creation-model.js";

export function adCreationController(adCreation) {

  const notificationContainer = document.getElementById('notificationContainer');
  const notification = notificationController(notificationContainer);

  adCreation.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(adCreation);
    const ad = Object.fromEntries(formData.entries());

    const selectedCategories = document.querySelectorAll('input[type="checkbox"]:checked');
    const tags = Array.from(selectedCategories).map(checkbox => checkbox.value);
    ad.tags = tags;



    try {
      await adCreate(ad);
      showSuccessNotification('Ad created successfully.');
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } catch (error) {
      showErrorNotification(error);
    }

  });

  function showSuccessNotification(message) {
    notification.showNotification(message, 'success');
  }

  function showErrorNotification(message) {
    notification.showNotification(message, 'error');
  }

}
