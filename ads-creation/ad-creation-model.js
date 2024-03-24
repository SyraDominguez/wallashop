export const adCreate = async (ad) => {
  const url = "http://localhost:8000/api/products";
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(ad),
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.message);
    }
  } catch (error) {
    if (error.message) {
      throw error.message;
    } else {
      throw error;
    }
  }
}
