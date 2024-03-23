
export function buildAds(ad) {
  return `
  <div class="ad-details">
    <img src="public/images/${ad.photo}" alt="${ad.name}" class="ad-photo">
    <h2>${ad.name}</h2>
    <p>${ad.description}</p>
    <p>${ad.price} €</p>
    <p>${ad.sale ? 'Sell' : 'Buy'}</p>
  </div>
`
}

export function buildEmptyTweetList() {
  return `<h3> Sorry, there are no sales yet </h3>`;
}