const URL = 'https://api.mercadolibre.com/sites/MLB';

export async function getCategories() {
  try {
    const fetchAPI = await fetch(`${URL}/categories`);
    const categories = await fetchAPI.json();
    return categories;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // const url = 'https://api.mercadolibre.com/sites/MLB/search?';
  try {
    const fetchAPI = await
    fetch(`${URL}/search?category=${categoryId}&q=$${query}`);
    // const url = `?q=${QUERY}`;
    const search = await fetchAPI.json();
    return search.results;
  } catch (error) {
    console.log(error);
  }
}
