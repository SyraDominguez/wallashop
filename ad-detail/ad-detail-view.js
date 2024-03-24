export function buildAdDetails(ad) {

  const categories = ad.tags && Array.isArray(ad.tags) ? ad.tags.join(', ') : '';

  return `
  <div class="single-ad-detail">
    <h4>${ad.name}</h4> 
    <img src="public/images/${ad.photo}" class="ad-photo">
    <br/><br/><br/>
    <p><strong>Description: </strong>${ad.description}</p>
    <p><big>${ad.sale ? 'Sell' : 'Buy'}</big></p>
    <p>Precio: ${ad.price} €</p>
    <br/>
    <p><strong>Categoriess:</strong> ${categories}</p>
    </div>
    
    `;
}


// <p><strong>Categorías:</strong> ${ad.tags.join(', ')}</p>
/*
{
  "id": 4,
  "name": "Toyota CH-R",
  "description": "I buy the new Toyota CH-R. I need it to work. It is urgent",
  "sale": false,
  "price": 35700,
  "photo": "chr.jpg",
  "tags": [
    "work",
    "motor"
  ]
}
*/