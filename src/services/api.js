const URL = 'https://api.mercadolibre.com/';
const SITE_ID = 'MLB';

export async function getCategories() {
  const query = `${URL}sites/${SITE_ID}/categories`;
  const response = await fetch(query);
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = `${URL}sites/search?category=${categoryId}&q=${query}`;
  const response = await fetch(endpoint);
  const products = await response.json();
  return products;
}
