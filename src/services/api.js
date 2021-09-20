export async function getCategories() {
  // Implemente aqui
  const responseRaw = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const responseJson = await responseRaw.json();

  return responseJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const responseRaw = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const responseJson = await responseRaw.json();

  return responseJson;
}
