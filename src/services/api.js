export async function getCategories() {
  const apifecth = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const responseJson = await apifecth.json();
  return responseJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  if (categoryId === null) {
    const categoriesFetch = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const resultJson = await categoriesFetch.json();
    return resultJson;
  }
  if (query === null) {
    const queryFetch = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    const resultJson = await queryFetch.json();
    return resultJson;
  }
  const productFetch = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const resultJson = await productFetch.json();
  return resultJson;
  // Com ajuda do colega Matheus Souza T14A, e do codigo retirado do PR
  // https://github.com/tryber/sd-014-a-project-frontend-online-store/pull/488/commits/98d0827ba530fa462921dc7b61652090e2931e8b
  // implementamos está função.
}
