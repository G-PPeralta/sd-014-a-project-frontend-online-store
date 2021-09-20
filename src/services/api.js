export async function getCategories() {
  // Implemente aqui
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await request.json();

  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  let msg = '';
  if (categoryId === '') {
    msg = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  } else if (query === '') {
    msg = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  } else {
    msg = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  }

  const request = await fetch(msg);
  const products = await request.json();

  return products;
}
