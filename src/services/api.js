const BASE_URL = 'https://api.mercadolibre.com/sites/MLB/';

async function callAPI(query) {
  try {
    const responseRaw = await fetch(query);
    const responseJSON = await responseRaw.json();
    return responseJSON;
  } catch (error) {
    console.log(`[Erro]: ${error}`);
    return null;
  }
}

export async function getCategories() {
  const CATEGORIES_ENDPOINT = `${BASE_URL}categories`;

  return callAPI(CATEGORIES_ENDPOINT);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const CATEGORY_QUERY_ITEMS = `${BASE_URL}search?category=${categoryId}&q=${query}`;

  return callAPI(CATEGORY_QUERY_ITEMS);
}
