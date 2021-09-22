export async function getCategories() {
  // Implemente aqui
  const responseRaw = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return responseRaw.json();
}

export async function getProductsFromCategoryAndQuery(CATEGORY_ID, QUERY) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const responseRaw = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}&q=${QUERY}`);
  return responseRaw.json();
}

// export async function getProductsFromCategoryAndQuery(CATEGORY_ID, QUERY, TEST = false) {
//   // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
//   if (TEST) {
//     const responseRaw = await fetch(`https://api.mercadolibre.com/items/${QUERY}`);
//     return responseRaw.json();
//   }
//   const responseRaw = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}&q=${QUERY}`);
//   return responseRaw.json();
// }

// export async function getProductItemFromML(id) {
//   console.log(id);
//   const responseRaw = await fetch(`https://api.mercadolibre.com/items/${id}`);
//   return responseRaw.json();
// }
