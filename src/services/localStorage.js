export default function saveLocalStorage(product) {
  const quantityProd = product;
  if (localStorage.cart) {
    const { cart } = localStorage;
    const cartJSON = JSON.parse(cart);
    let idx;
    if (cartJSON.some(({ id }, index) => {
      idx = index;
      return product.id === id;
    })) {
      let { quantity } = quantityProd;
      quantity = Number(quantity) + 1;
      quantityProd.quantity = quantity;
      cartJSON[idx] = quantityProd;
      return localStorage.setItem('cart', JSON.stringify(cartJSON));
    }
    console.log('passou');
    quantityProd.quantity = 1;
    const cartUpDate = cartJSON.concat(quantityProd);
    localStorage.setItem('cart', JSON.stringify(cartUpDate));
  } else {
    quantityProd.quantity = 1;
    localStorage.setItem('cart', JSON.stringify([quantityProd]));
  }
}
