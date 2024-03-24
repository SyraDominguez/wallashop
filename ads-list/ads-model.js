function parseAds(data) {
  return data.map(data => ({
    name: data.name,
    description: data.description,
    price: data.price,
    sale: data.sale,
    photo: data.photo,
    id: data.id
  }))
}

export async function getAds() {

  const url = 'http://localhost:8000/api/products';

  let ads = [];

  try {
    const response = await fetch(url);
    const data = await response.json();
    ads = parseAds(data);
  } catch (error) {
    throw new Error(`<p>Error Loading Ads</p>`)
  }

  return ads;
};

