export async function getCategories() {
  const apifecth = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const responseJson = await apifecth.json();
  return responseJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const apiCategories = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  const categoriesJson = await apiCategories.json();
  return categoriesJson;
}
