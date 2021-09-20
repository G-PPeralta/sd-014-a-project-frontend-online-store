export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestJson = await request.json();
  return requestJson;
}

export async function getProductsFromCategoryAndQuery(QUERY) {
  const requestProduct = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}
  `);
  const requestProductJson = await requestProduct.json();
  return requestProductJson;
}
