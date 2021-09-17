export async function getCategories() {
  const requestRaw = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestJson = await requestRaw.json();
  return requestJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const requestRaw = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const requestJson = await requestRaw.json();
  return requestJson;
}
