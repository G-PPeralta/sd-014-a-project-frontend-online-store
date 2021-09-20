if (!JSON.parse(localStorage.getItem('cart'))) {
  localStorage.setItem('cart', JSON.stringify([]));
}

const readCartItems = () => JSON.parse(localStorage.getItem('cart'));

const addToCart = ({ title, thumbnail, price, id }) => {
  const cart = readCartItems();
  if (cart.some((product) => product.id === id)) {
    const cartMap = cart.map((product) => {
      if (product.id === id) {
        if (product.quant) {
          product.quant += 1;
        } else {
          product.quant = 2;
        }
      }
      return product;
    });
    localStorage.setItem('cart', JSON.stringify(cartMap));
  } else {
    localStorage.setItem(
      'cart',
      JSON.stringify([...cart, { id, title, price, thumbnail }]),
    );
  }
};

const removeFromCart = () => {
  console.log('oi');
};

export { addToCart, removeFromCart, readCartItems };
