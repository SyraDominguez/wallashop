import { dispatchEvent } from '../utils/dispatchEvent.js';

import { getAds } from './ads-model.js';
import { buildAds, buildEmptyTweetList } from './ads-view.js';

export function adsListController(adsList) {
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  const showAdsButton = document.createElement('button');
  showAdsButton.textContent = 'Show New Ads';
  buttonContainer.appendChild(showAdsButton);

  const footer = document.querySelector('footer');
  document.body.insertBefore(buttonContainer, footer);

  showAdsButton.addEventListener('click', () => handleShowAdsButtonClicked(adsList));
}

async function handleShowAdsButtonClicked(adsList) {
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