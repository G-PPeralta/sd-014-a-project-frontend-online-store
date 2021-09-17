export async function getCategories() {
  // Implemente aqui
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const objectReturned = await request.json();
  return objectReturned;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const objectReturned = await request.json();
  return objectReturned;
}
