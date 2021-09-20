export function productsSave(cartProducts, quantity) {
  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  return localStorage.setItem('quantity', JSON.stringify(quantity));
}

export function getCartProductsAndQuantity() {
  const products = localStorage.getItem('cartProducts');
  const quantity = localStorage.getItem('quantity');
  return [JSON.parse(products), JSON.parse(quantity)];
}
