const linkBase = 'https://api.mercadolibre.com/sites/MLB/';

async function getApi(search) {
  try {
    const response = await fetch(search);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getCategories() {
  // Requisito feito via LiveShare no VSCode por todos os membros do grupo conjuntamente
  const baseCategories = `${linkBase}categories`;
  return getApi(baseCategories);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Requisito feito via LiveShare no VSCode por todos os membros do grupo conjuntamente
  const queryItems = `${linkBase}search?category=${categoryId}&q=${query}`;
  return getApi(queryItems);
}
