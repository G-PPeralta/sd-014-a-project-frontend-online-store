export async function getCategories(categories = 'categories') {
  // Implemente aqui
  return fetch(`https://api.mercadolibre.com/sites/MLB/${categories}`)
    .then((response) => response.json()
      .then((dados) => dados));
}
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((response) => response.json()
      .then((dados) => dados));
}
