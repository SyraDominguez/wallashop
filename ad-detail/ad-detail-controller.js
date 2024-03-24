import { deleteAd, getAdDetail, getUserData } from "./ad-detail-model.js";
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
    handleRemoveAdButton(adDetail, ad);
    const container = adDetail.querySelector('#container');
    container.innerHTML = buildAdDetails(ad)
  } catch (error) {
    alert(error)
  }

  async function handleRemoveAdButton(adDetail, ad) {
    const token = localStorage.getItem('token');
    const userData = await getUserData(token);

    if (ad.userId === userData.id) {
      const removeAdButton = adDetail.querySelector('#removeAdButton');
      removeAdButton.removeAttribute('disabled');
      removeAdButton.addEventListener('click', () => {
        removeAd(ad.id, token);
      })
    }

  }

  async function removeAd(adId, token) {
    if (window.confirm('Are you sure you want to remove this ad?')) {

      try {
        await deleteAd(adId, token);
        setTimeout(() => {
          window.location.href = '/';
        }, 2000)

      } catch (error) {
        alert(error)
      }
    }
  }

  function goBackButton() {
    const backButton = adDetail.querySelector('#goBack');
    backButton.addEventListener('click', () => {
      window.history.back();
    })
  }
}


