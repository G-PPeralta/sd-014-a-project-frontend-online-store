export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestJson = await request.json();
  return requestJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const requestProduct = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&̲q=${query}`);
  const requestProductJson = await requestProduct.json();
  return requestProductJson;
}

export async function getProductInfo(categoryId, productId) {
  const json = await getProductsFromCategoryAndQuery(categoryId, productId);
  return json.results.find(({ id }) => id === productId);
}
