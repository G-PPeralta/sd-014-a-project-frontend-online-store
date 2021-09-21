export default function saveLocalStorage(product) {
  const quantityProd = product;
  quantityProd.quantity = 1;
  if (localStorage.cart) {
    const { cart } = localStorage;
    const cartJSON = JSON.parse(cart);
    // if (cartJSON.some(({ id }) => product.id === id)) return null;
    const cartUpDate = cartJSON.concat(quantityProd);
    localStorage.setItem('cart', JSON.stringify(cartUpDate));
  } else {
    localStorage.setItem('cart', JSON.stringify([quantityProd]));
  }
}
