function parseAd(ad) {
  return {
    name: ad.name,
    description: ad.description,
    price: ad.price,
    sale: ad.sale,
    photo: ad.photo,
    tags: ad.tags,
    id: ad.id,
    favorites: ad.favorites,
    userId: ad.userId
  }
}

function parseUser(user) {
  return {
    id: user.id
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

export async function getUserData(token) {
  const url = `http://localhost:8000/auth/me`;



  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    return parseUser(data)
  } catch (error) {
    throw new Error(`<p>Error Loading User Data</p>`);
  }
}

export async function deleteAd(adId, token) {
  const url = `http://localhost:8000/api/products/${adId}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.message);
    }

  } catch (error) {
    throw new Error(`<p>Error Removing Ad</p>`);
  }
}