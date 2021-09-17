export async function getCategories() {
  const req = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const response = await req.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const req = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const response = await req.json();
  return response;
}
