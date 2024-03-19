const ads = [
  {
    "initialProducts": [
      {
        "name": "Airpods",
        "sale": false,
        "price": 80,
        "photo": "airpods.jpg",
        "tags": [
          "work",
          "lifestyle"
        ]
      },
      {
        "name": "Alexa",
        "sale": true,
        "price": 125.75,
        "photo": "alexa.jpg",
        "tags": [
          "lifestyle",
          "mobile"
        ]
      },
      {
        "name": "Camara Canon",
        "sale": true,
        "price": 535,
        "photo": "canon.jpg",
        "tags": [
          "work",
          "lifestyle"
        ]
      },
      {
        "name": "Toyota CH-R",
        "sale": false,
        "price": 35700,
        "photo": "chr.jpg",
        "tags": [
          "work",
          "motor"
        ]
      },
      {
        "name": "MacBook Pro",
        "sale": false,
        "price": 850,
        "photo": "macbook_pro.jpg",
        "tags": [
          "work",
          "lifestyle"
        ]
      },
      {
        "name": "iPhone 13 Pro",
        "sale": false,
        "price": 435,
        "photo": "iphone13pro.jpg",
        "tags": [
          "work",
          "lifestyle",
          "mobile"
        ]
      },
      {
        "name": "JBL headphones",
        "sale": true,
        "price": 197,
        "photo": "jbl.jpg",
        "tags": [
          "lifestyle",
          "mobile"
        ]
      }
    ]
  }
]
const adsSection = document.querySelector('.advertisement-list');

ads[0].initialProducts.forEach(ad => {
  const adItem = document.createElement('li');
  adItem.classList.add('advertisement-item'); adItem.classList.add('product-columns');

  adItem.innerHTML = `
  <img src="public/images/${ad.photo}" alt="${ad.name}" class="ad-photo">
  <div class="ad-details">
    <h2>${ad.name}</h2>
    <p>${ad.price} €</p>
    <p>${ad.sale ? 'For Sale' : 'Wanted'}</p>
  </div>
`;

  adsList.appendChild(adItem);
});