export async function getCategories() {
  const category = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return category.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  return products.json();
}
