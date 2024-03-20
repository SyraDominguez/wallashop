// VIEW

export function buildAds(ad) {
  return `
  <img src="public/images/${ad.photo}" alt="${ad.name}" class="ad-photo">
  <div class="ad-details">
    <h2>${ad.name}</h2>
    <p>${ad.description}</p>
    <p>${ad.price} €</p>
    <p>${ad.sale ? 'For Sale' : 'Wanted'}</p>
  </div>
`
};