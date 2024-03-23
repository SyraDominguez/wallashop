import { dispatchEvent } from '../utils/dispatchEvent.js';

import { getAds } from './ads-model.js';
import { buildAds, buildEmptyTweetList } from './ads-view.js';

export async function adsListController(adsList) {
  const spinner = adsList.querySelector('.loader')
  try {
    spinner.classList.toggle('hidden');
    const ads = await getAds();
    if (ads.length > 0) {
      renderAds(ads, adsList);
    } else {
      renderEmptyAdsList(adsList);
    }

  } catch (errorMessage) {
    dispatchEvent('error-loading-ads', {
      message: errorMessage,
      type: 'error'
    }, adsList);
  } finally {
    spinner.classList.toggle('hidden');
  }
}

function renderAds(ads, adsList) {
  ads.forEach(ad => {
    const adItem = document.createElement('div');
    adItem.classList.add('advertisement-item');
    adItem.classList.add('product-columns');

    adItem.innerHTML = buildAds(ad);

    adsList.appendChild(adItem);
  });
}

function renderEmptyAdsList(adsList) {
  adsList.innerHTML = buildEmptyTweetList();
}