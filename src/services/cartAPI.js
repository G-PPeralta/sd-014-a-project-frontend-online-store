if (!JSON.parse(localStorage.getItem('cart'))) {
  localStorage.setItem('cart', JSON.stringify([]));
}

if (!JSON.parse(localStorage.getItem('feedbacks'))) {
  localStorage.setItem('feedbacks', JSON.stringify({}));
}

const readCartItems = () => JSON.parse(localStorage.getItem('cart'));

const addToCart = ({ title, thumbnail, price, id }) => {
  const cart = readCartItems();
  if (cart.some((product) => product.id === id)) {
    const cartMap = cart.map((product) => {
      if (product.id === id) {
        product.quant += 1;
      }
      return product;
    });
    localStorage.setItem('cart', JSON.stringify(cartMap));
  } else {
    const quant = 1;
    localStorage.setItem(
      'cart',
      JSON.stringify([...cart, { id, title, price, thumbnail, quant }]),
    );
  }
};

const removeFromCart = (id, quant) => {
  const cart = readCartItems();
  if (quant > 1) {
    const cartMap = cart.map((product) => {
      if (product.id === id) {
        product.quant -= 1;
      }
      return product;
    });
    localStorage.setItem('cart', JSON.stringify(cartMap));
  }
};

const readFeedbacks = () => JSON.parse(localStorage.getItem('feedbacks'));

const addFeedback = (feedback, id) => {
  const feedbacks = readFeedbacks();
  if (!feedbacks[id]) {
    feedbacks[id] = [feedback];
  } else {
    feedbacks[id] = [...feedbacks[id], feedback];
  }

  localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
};

export { addToCart, removeFromCart, readCartItems, readFeedbacks, addFeedback };
