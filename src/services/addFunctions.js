const products = 'products';

if (!JSON.parse(localStorage.getItem(products))) {
  localStorage.setItem(products, JSON.stringify([]));
}
const readCartItems = () => JSON.parse(localStorage.getItem(products));

const saveCartItems = (product) => localStorage
  .setItem(products, JSON.stringify(product));

export const getCartItems = () => {
  const cartItems = readCartItems();
  return cartItems;
};

export const addProduct = (product) => {
  if (product) {
    const cartItems = readCartItems();
    saveCartItems([...cartItems, product]);
  }
};

export const removeProduct = (product) => {
  const cartItems = readCartItems();
  saveCartItems(cartItems.filter((p) => p.id !== product.id));
};
