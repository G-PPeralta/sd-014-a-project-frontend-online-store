const URL = 'https://api.mercadolibre.com/sites/';
const SITE_ID = 'MLB';

async function fetchAPI(query) {
  const response = await fetch(query);
  const data = await response.json();
  return data;
}

export async function getCategories() {
  const ENDPOINT = `${URL}${SITE_ID}/categories`;
  const categories = await fetchAPI(ENDPOINT);
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = `${URL}${SITE_ID}/search?category=${categoryId}&q=${query}`;
  const products = await fetchAPI(endpoint);
  return products;
}
