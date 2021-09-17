export async function getCategories() {
  const endpoint = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const jsonResolve = await endpoint.json();
  return jsonResolve;
}

export async function getProductsFromCategoryAndQuery(CATEGORY, QUERY) {
  const endpoint = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY}_ID&q=${QUERY}`);
  const jsonResolve = endpoint.json();
  return jsonResolve;
}
