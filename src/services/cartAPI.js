if (!JSON.parse(localStorage.getItem('cart'))) {
  localStorage.setItem('cart', JSON.stringify([]));
}

const readCartItems = () => JSON.parse(localStorage.getItem('cart'));

const addToCart = ({ title, thumbnail, price, id }) => {
  const cart = readCartItems();
  localStorage.setItem('cart',
    JSON.stringify([...cart, { id, title, price, thumbnail }]));
};

const removeFromCart = () => {
  console.log('oi');
};

export {
  addToCart,
  removeFromCart,
  readCartItems,
};
