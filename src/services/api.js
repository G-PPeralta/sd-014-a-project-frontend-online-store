export async function getCategories() {
  // Requisito feito via LiveShare no VSCode por todos os membros do grupo conjuntamente
    const myEndPoint = await fetch(`https://api.mercadolibre.com/sites/MLB/categories`);
    const myInfo = await myEndPoint.json();
    console.log(myInfo);
    return myInfo;
  };

  //const getMusics = async (id) => {
//   const request = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
//   const requestJson = await request.json();
//   return requestJson.results;
// };

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  // Requisito feito via LiveShare no VSCode por todos os membros do grupo conjuntamente
  // termo     https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
  // categoria:   https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID
  // Para buscar itens de uma categoria por termo:
  //  https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY <<< Compara aqui
}
