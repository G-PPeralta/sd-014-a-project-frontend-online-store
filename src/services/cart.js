import { getProductsFromCategoryAndQuery } from './api';

export async function getProductInfo(categoryId, productId) {
  const json = await getProductsFromCategoryAndQuery(categoryId, productId);
  console.log('getProductInfo json', json);
  return json.results.find(({ id }) => id === productId);
}
export function getCartData() {
  return JSON.parse(localStorage.getItem('cart'));
}

export async function getCartItems() {
  // Map assíncrono precisa de Promise.all e callback assíncrona
  // https://advancedweb.hu/how-to-use-async-functions-with-array-map-in-javascript/
  const cart = Promise.all(getCartData().map(async ({ category, productId, qty }) => {
    console.log('vamos rodar getProductInfo', getProductInfo);
    const info = await getProductInfo(category, productId);
    console.log('info', info);
    const { title, price } = info;
    return { title, price, qty, productId };
  }));
  console.log('cart depois de promise.all', cart);
  return cart;
}

export async function addToCart(category, id, qty = 1) {
  const cart = await getCartData();
  // se o item já existe, e só alterar o qty, senão cria um novo item no cart
  const updatedCart = cart.find(({ productId }) => productId === id)
    ? cart.map((item) => (
      item.productId === id ? { ...item, qty: item.qty + qty } : item
    ))
    : [...cart, { category, productId: id, qty }];

  localStorage.setItem('cart', JSON.stringify(updatedCart));
}
