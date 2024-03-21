import { getAds } from './ads-model.js';
import { buildAds, buildEmptyTweetList } from './ads-view.js';

export function adsListController(adsSection) {

  const showAdsButton = document.createElement('button');
  showAdsButton.textContent = 'Show New Ads';
  adsSection.appendChild(showAdsButton);

  showAdsButton.addEventListener('click', () => handleShowAdsButtonClicked(adsList))
}

async function handleShowAdsButtonClicked(adsList) {
  const spinner = adsList.querySelector('.loader')
  try {
    spinner.classList.toggle('hidden');
    const ads = await getAds();
    if (ads.length === 0) {
      renderEmptyAdsList(adsList);
    } else {
      renderAds(ads, adsList);
    }

  } catch (errorMessage) {
    alert(errorMessage)
  } finally {
    spinner.classList.toggle('hidden');
  }
}

function renderAds(ads, adsList) {
  ads.forEach(ad => {
    const adItem = document.createElement('li');
    adItem.classList.add('advertisement-item'); adItem.classList.add('product-columns');

    adItem.innerHTML = buildAds(ad);

    adsList.appendChild(adItem)
  })
}

function renderEmptyAdsList(adsList) {
  adsList.innerHTML = buildEmptyTweetList();
}