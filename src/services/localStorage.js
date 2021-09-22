const SHOPPING_CART_PRODUCTS = 'shopping_cart_products';

export const createStoraged = () => {
  if (!JSON.parse(localStorage.getItem(SHOPPING_CART_PRODUCTS))) {
    localStorage.setItem(SHOPPING_CART_PRODUCTS, JSON.stringify([]));
  }
};

export const readProducts = () => JSON.parse(
  localStorage.getItem(SHOPPING_CART_PRODUCTS),
);

const saveShoppingCartProducts = (cart) => localStorage
  .setItem(SHOPPING_CART_PRODUCTS, JSON.stringify(cart));

export const addProduct = (product) => {
  const producWithQnt = {
    product,
    quantity: 1,
  };
  const products = readProducts();
  const verifyDuplicating = products.some((element) => element.product.id === product.id);
  return verifyDuplicating ? null
    : saveShoppingCartProducts([...products, producWithQnt]);
};

export const removeProduct = (product) => {
  const products = readProducts();
  saveShoppingCartProducts(products.filter((s) => s.product.id !== product.id));
};
