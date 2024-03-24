export function buildAdDetails(ad) {

  let favorites = ad.favorites && ad.favorites.length > 0
    ? `<p>♥️ ${ad.favorites} unit of person have saved this ad as a favorite</p>`
    : '♥️ No one has saved this ad as a favorite';

  return `
    <div class="single-ad-detail">
      <h4>${ad.name}</h4> 
      <img src="public/images/${ad.photo}" class="ad-photo">
      <br/><br/><br/>
      <p><strong>Description: </strong>${ad.description}</p>
      <p><big>${ad.sale ? 'Sell' : 'Buy'}</big></p>
      <p>Price: ${ad.price} €</p>
      <br/>
      <p><strong>Categories:</strong> ${ad.tags.join(', ')}</p>
      <p>${favorites}</p>
    </div>
  `;
}

