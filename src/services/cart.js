const PRODUCTS_KEY = 'products';

if (!JSON.parse(localStorage.getItem(PRODUCTS_KEY))) {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify([]));
}

export const readProductsInCart = () => JSON.parse(localStorage.getItem(PRODUCTS_KEY));

const saveProductsInCart = (productsInCart) => {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(productsInCart));
};

export const addProductToCart = (product) => {
  const productsInCart = readProductsInCart();
  saveProductsInCart([...productsInCart, product]);
};

export const removeProductFromCart = (product) => {
  const productsInCart = readProductsInCart();
  saveProductsInCart(productsInCart.filter((p) => product.id !== p.id));
};
