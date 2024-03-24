function parseAd(ad) {
  return {
    name: ad.name,
    description: ad.description,
    price: ad.price,
    sale: ad.sale,
    photo: ad.photo,
    tags: ad.tags,
    id: ad.id,
    favorites: ad.favorites
  }
}


export async function getAdDetail(adId) {
  const url = `http://localhost:8000/api/products/${adId}`;


  try {
    const response = await fetch(url);
    const data = await response.json();
    const ad = parseAd(data);
    return ad;
  } catch (error) {
    throw new Error(`<p>Error Loading Ad</p>`);
  }


}