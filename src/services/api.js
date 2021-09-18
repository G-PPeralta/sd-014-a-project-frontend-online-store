export async function getCategories() {
  const categories = await (await fetch('https://api.mercadolibre.com/sites/MLB/categories')).json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const products = await (await fetch(url)).json();
  return products;
}
