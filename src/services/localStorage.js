const SHOPPING_CART_PRODUCTS = 'shopping_cart_products';

export const createStoraged = () => {
  if (!JSON.parse(localStorage.getItem(SHOPPING_CART_PRODUCTS))) {
    localStorage.setItem(SHOPPING_CART_PRODUCTS, JSON.stringify([]));
  }
};

export const sortString = (a, b) => { // função para 'sortear' a chave arrayProduct do state ShoppingCart, corrige bug quando incrementa um item no cart.
  const NUMBER_FOR_SORT = -1;
  if (a.product.title < b.product.title) {
    return NUMBER_FOR_SORT;
  }
  if (a.product.title > b.product.title) {
    return 0;
  }
  return 0;
};

export const readProducts = () => {
  const products = JSON.parse(
    localStorage.getItem(SHOPPING_CART_PRODUCTS),
  );
  return products;
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

export const removeProduct = (id) => {
  const products = readProducts();
  saveShoppingCartProducts(products.filter((product) => product.product.id !== id));
};

export const sumTotalCartPrice = (array) => {
  let sum = 0;
  array.forEach((product) => {
    sum += product.product.price * product.quantity;
  });
  return sum;
};
