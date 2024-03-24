import { getAdDetail } from "./ad-detail-model.js";
import { buildAdDetails } from "./ad-detail-view.js";

export async function adDetailController(adDetail) {

  const params = new URLSearchParams(window.location.search)
  const adId = params.get('adId');

  if (!adId) {
    window.location.href = '/'
  }

  goBackButton();

  try {
    const ad = await getAdDetail(adId);
    const container = adDetail.querySelector('#container');
    container.innerHTML = buildAdDetails(ad)
  } catch (error) {
    alert(error)
  }

  function goBackButton() {
    const backButton = adDetail.querySelector('#goBack');
    backButton.addEventListener('click', () => {
      window.history.back();
    })
  }


}