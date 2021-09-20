export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const returnedObject = await response.json();

  return returnedObject;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // O padrão é fazer a busca com os dois parâmetros
  let url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  // Se o input estiver vazio(query), a função buscará somente pela categoria
  if (query.trim() === '') {
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  }
  // Se a categoria não estiver selecionada, a função buscará somente pelo input
  if (categoryId === '') {
    url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  }

  const response = await fetch(url);
  const returnedObject = await response.json();

  return returnedObject;
}
