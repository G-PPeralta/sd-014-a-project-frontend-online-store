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
  saveProductsInCart(productsInCart.filter((p) => product.product.id !== p.product.id));
};

export const isItemInCart = (item) => {
  const itemsInCart = readProductsInCart();
  return itemsInCart.some((i) => i.product.id === item.product.id);
};

export const increaseQuant = (item) => {
  if (isItemInCart(item)) {
    const itemsInCart = readProductsInCart();
    const itemCopy = itemsInCart.find((i) => i.product.id === item.product.id);
    removeProductFromCart(item);
    itemCopy.quant += 1;
    addProductToCart(itemCopy);
  } else {
    addProductToCart(item);
  }
};

export const decreaseQuant = (item) => {
  const itemsInCart = readProductsInCart();
  const itemCopy = itemsInCart.find((i) => i.product.id === item.product.id);
  removeProductFromCart(item);

  if (itemCopy.quant > 1) {
    itemCopy.quant -= 1;
    addProductToCart(itemCopy);
  }
};

export const getTotal = () => {
  const itemsInCart = readProductsInCart();
  return itemsInCart.reduce(
    (acc, res) => acc + (res.product.price * res.quant), 0,
  );
};
