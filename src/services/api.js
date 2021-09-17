export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const apiMercado = await fetch(URL);
  const response = await apiMercado.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const apiMercado = await fetch(URL);
  const response = await apiMercado.json();
  return response;
}
