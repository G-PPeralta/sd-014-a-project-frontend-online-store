export async function getCategories() {
  // Implemente aqui
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categoriesJSON = await categories.json();
  return categoriesJSON;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  console.log('teste');
}
