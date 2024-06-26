import { notificationController } from "./notification/notification-controller.js";
import { adsListController } from "./ads-list/ads-controller.js";
import { sessionController } from "./session/session-controller.js";

const notificationList = document.querySelector('.notification-list');
const adsList = document.querySelector('.advertisement-list');
const session = document.querySelector('#session');

sessionController(session);
const { showNotification } = notificationController(notificationList);

adsList.addEventListener('error-loading-ads', (event) => {
  showNotification(event.detail.message, event.detail.type)
  event.stopPropagation();
})

adsListController(adsList);

window.addEventListener('offline', () => {
  showNotification('You are offline', 'error')
})