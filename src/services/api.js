const CATEGORIES_ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/categories';
const ITEM_ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/search?';

export async function getCategories() {
  const result = await fetch(CATEGORIES_ENDPOINT);
  return result.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const result = await fetch(`${ITEM_ENDPOINT}category=${categoryId}&q=${query}`);
  return result.json();
}
