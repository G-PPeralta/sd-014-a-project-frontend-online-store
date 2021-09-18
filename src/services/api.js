export async function getCategories() {
  const fetchResult = await (await fetch('https://api.mercadolibre.com/sites/MLB/categories')).json();
  return fetchResult;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
