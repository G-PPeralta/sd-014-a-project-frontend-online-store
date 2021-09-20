export async function getCategories() {
  const categories = await (await fetch('https://api.mercadolibre.com/sites/MLB/categories')).json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId) {
  const products = await (await fetch(`https://api.mercadolibre.com/categories/${categoryId}`)).json();
  return products;
}

