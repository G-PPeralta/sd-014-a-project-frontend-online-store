const SHOPPING_CART_KEY = 'online_store_cart';

if (!JSON.parse(localStorage.getItem(SHOPPING_CART_KEY))) {
  localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify([]));
}
export const readShoppingCart = () => JSON.parse(localStorage.getItem(SHOPPING_CART_KEY));

const saveShoppingCart = (items) => localStorage
  .setItem(SHOPPING_CART_KEY, JSON.stringify(items));

export const addItemToCart = (item) => {
  const NOT_FOUND = -1;
  if (item) {
    const items = readShoppingCart();
    const index = items.findIndex(({ id }) => id === item.id);
    if (index === NOT_FOUND) {
      item.shopping_cart = 1;
      saveShoppingCart([...items, item]);
    } else {
      if (items[index].shopping_cart < items[index].available_quantity) {
        items[index].shopping_cart += 1;
      }
      saveShoppingCart(items);
    }
  }
};

export const subItemFromCart = (item) => {
  if (item) {
    const items = readShoppingCart();
    const index = items.findIndex(({ id }) => id === item.id);
    if (index !== NOT_FOUND) {
      if (item.shopping_cart <= 1) {
        saveShoppingCart(items.filter(({ id }) => id !== item.id));
      } else {
        items[index].shopping_cart -= 1;
        saveShoppingCart(items);
      }
    }
  }
};

export const removeItemFromCart = (item) => {
  const items = readShoppingCart();
  saveShoppingCart(items.filter(({ id }) => id !== item.id));
};
