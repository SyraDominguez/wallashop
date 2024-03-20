import { ads } from './ads-model.js';
import { buildAds } from './ads-view.js';



export function adsListController(adsSection) {
  // CONTROLLER
  const showAdsButton = document.createElement('button');
  showAdsButton.textContent = 'Show New Ads';
  adsSection.appendChild(showAdsButton);

  showAdsButton.addEventListener('click', () => {
    ads[0].initialProducts.forEach(ad => {
      const adItem = document.createElement('li');
      adItem.classList.add('advertisement-item'); adItem.classList.add('product-columns');

      adItem.innerHTML = buildAds(ad)

      adsList.appendChild(adItem);
    });
  })
}
