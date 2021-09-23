import { getProductInfo } from './api';

export function getCartData() {
  return JSON.parse(localStorage.getItem('cart'));
}

export async function getCartItems() {
  // Map assíncrono precisa de Promise.all e callback assíncrona
  // https://advancedweb.hu/how-to-use-async-functions-with-array-map-in-javascript/
  return Promise.all(getCartData().map(async ({ productId, category, qty }) => {
    const info = await getProductInfo(category, productId);
    const { title, price } = info;
    return { title, price, qty, productId };
  }));
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
