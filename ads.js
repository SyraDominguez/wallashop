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
  // Crear un elemento li para cada anuncio
  const adItem = document.createElement('li');
  adItem.classList.add('advertisement-item'); // Añadir una clase para estilizar cada anuncio
  adItem.classList.add('product-columns'); // Añadir la clase para la cuadrícula

  // Crear el contenido HTML para cada anuncio utilizando los datos del objeto 'ad'
  adItem.innerHTML = `
    <img src="public/images/${ad.photo}" alt="${ad.name}" class="ad-photo">
    <div class="ad-details">
      <h2>${ad.name}</h2>
      <p>${ad.description}</p>
      <p>${ad.price} €</p>
      <p>${ad.sale ? 'For Sale' : 'Not For Sale'}</p>
    </div>
  `;

  // Agregar el anuncio al contenedor de la sección de anuncios
  adsList.appendChild(adItem);
});