export default function saveLocalStorage(product) {
  const quantityProd = product;
  quantityProd.quantity = 1;
  if (localStorage.cart) {
    const { cart } = localStorage;
    const cartJSON = JSON.parse(cart);
    const cartUpDate = cartJSON.concat(quantityProd);
    localStorage.setItem('cart', JSON.stringify(cartUpDate));
  } else {
    localStorage.setItem('cart', JSON.stringify([quantityProd]));
  }
}
