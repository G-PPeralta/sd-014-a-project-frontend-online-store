const SHOPPING_CART_KEY = 'shopping-cart';

if (!JSON.parse(localStorage.getItem(SHOPPING_CART_KEY))) {
  localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify([]));
}

const readShoppingCart = () => JSON.parse(localStorage.getItem(SHOPPING_CART_KEY));

const saveShoppingCart = (cartItems) => localStorage
  .setItem(SHOPPING_CART_KEY, JSON.stringify(cartItems));

export default function addToLocalStorage(product) {
  if (product) {
    const cartItems = readShoppingCart();
    saveShoppingCart([...cartItems, product]);
  }
}