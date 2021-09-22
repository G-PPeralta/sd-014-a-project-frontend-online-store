const SHOPPING_CART_PRODUCTS = 'shopping_cart_products';

export const createStoraged = () => {
  if (!JSON.parse(localStorage.getItem(SHOPPING_CART_PRODUCTS))) {
    localStorage.setItem(SHOPPING_CART_PRODUCTS, JSON.stringify([]));
  }
};

export const sortString = (a, b) => {
  const NUMBER_FOR_SORT = -1;
  if (a.product.id < b.product.id) {
    return NUMBER_FOR_SORT;
  }
  if (a.product.id > b.product.id) {
    return 0;
  }
  return 0;
};

export const readProducts = () => {
  const products = JSON.parse(
    localStorage.getItem(SHOPPING_CART_PRODUCTS),
  );
  return products.sort((a, b) => sortString(a, b));
};

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
