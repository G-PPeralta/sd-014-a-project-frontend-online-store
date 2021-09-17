export async function getCategories() {
  try {
    const fetchAPI = await fetch(' https://api.mercadolibre.com/sites/MLB/categories');
    const categories = await fetchAPI.json();
    return categories;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const fetchAPI = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_${categoryId}&q=$${query}`);
    const search = await fetchAPI.json();
    return search;
  } catch (error) {
    console.log(error);
  }
}
