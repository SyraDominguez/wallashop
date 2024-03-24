import { getAdDetail } from "./ad-detail-model.js";
import { buildAdDetails } from "./ad-detail-view.js";

export async function adDetailController(adDetail) {

  const params = new URLSearchParams(window.location.search)
  const adId = params.get('adId');

  if (!adId) {
    window.location.href = '/'
  }

  try {
    const ad = await getAdDetail(adId);
    adDetail.innerHTML = buildAdDetails(ad)
  } catch (error) {
    alert(error)
  }

}