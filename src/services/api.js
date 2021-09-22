export async function getCategories() {
  try {
    const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const response = categories.json();
    return response;
  } catch (e) {
    console.log(`Erro no fetch getCategories: ${e}`);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const response = products.json();
    return response;
  } catch (e) {
    console.log(`Erro no fetch categoryAndQuery: ${e}`);
  }
}
