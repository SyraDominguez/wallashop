import { notificationController } from "./notification/notification-controller.js";
import { adsListController } from "./ads-list/ads-controller.js";

const notificationList = document.querySelector('.notification-list');
const adsList = document.querySelector('.advertisement-list');


const { showNotification } = notificationController(notificationList);

adsList.addEventListener('error-loading-ads', (event) => {
  showNotification(event.detail.message, event.detail.type)
  event.stopPropagation();
})

adsListController(adsList);

