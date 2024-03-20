import { ads } from './ads-model.js';
import { buildAds } from './ads-view.js';

// CONTROLLER
const adsSection = document.querySelector('.advertisement-list');

ads[0].initialProducts.forEach(ad => {
  const adItem = document.createElement('li');
  adItem.classList.add('advertisement-item'); adItem.classList.add('product-columns');

  adItem.innerHTML = buildAds(ad)

  adsList.appendChild(adItem);
});