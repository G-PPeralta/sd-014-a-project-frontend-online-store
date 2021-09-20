const URL = 'https://api.mercadolibre.com/';
const SITE_ID = 'MLB';

export async function getCategories() {
  const query = `${URL}sites/${SITE_ID}/categories`;
  const response = await fetch(query);
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
