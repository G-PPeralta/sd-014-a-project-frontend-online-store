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
  if (productsInCart) {
    saveProductsInCart([...productsInCart, product]);
  } else {
    saveProductsInCart([product]);
  }
};

export const removeProductFromCart = (product) => {
  const productsInCart = readProductsInCart();
  saveProductsInCart(productsInCart.filter((p) => product.product.id !== p.product.id));
};

export const isItemInCart = (item) => {
  const itemsInCart = readProductsInCart();
  if (itemsInCart) {
    return itemsInCart.some((i) => i.product.id === item.product.id);
  }
  return false;
};

export const increaseQuant = (item) => {
  if (isItemInCart(item)) {
    const itemsInCart = readProductsInCart();
    const newList = itemsInCart.map((i) => {
      if (i.product.id === item.product.id) {
        i.quant += 1;
      }
      return i;
    });
    saveProductsInCart(newList);
  } else {
    addProductToCart(item);
  }
};

export const decreaseQuant = (item) => {
  const itemsInCart = readProductsInCart();
  const updatedList = itemsInCart.map((i) => {
    if (i.product.id === item.product.id) i.quant -= 1;
    return i;
  });
  const newList = updatedList.filter((i) => i.quant > 0);
  saveProductsInCart(newList);
};

export const getTotal = () => {
  const itemsInCart = readProductsInCart();
  return itemsInCart.reduce(
    (acc, res) => acc + (res.product.price * res.quant), 0,
  );
};

export const getQuantity = () => {
  const itemsInCart = readProductsInCart();
  return itemsInCart.reduce((acc, res) => acc + res.quant, 0);
};
