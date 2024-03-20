function parseAds(data) {
  return data.map(data => ({
    name: data.name,
    description: data.description,
    price: data.price,
    sale: data.sale,
    photo: data.photo,
  }))
}

export async function getAds() {

  // const ads = [];

  const url = 'https://fake-tweets-api-kc.vercel.app/posts';

  let ads = [];

  try {
    const response = await fetch(url);
    const data = await response.json();
    ads = parseAds(data);
  } catch (error) {
    throw new Error('Error Loading Ads')
  }

  return ads;
};

