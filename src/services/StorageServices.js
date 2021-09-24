const produtos = JSON.parse(localStorage.getItem('cartItem'));
if (!produtos) {
  localStorage.setItem('cartItem', JSON.stringify([]));
}
const NOT_FOUND = -1;
const getter = () => JSON.parse(localStorage.getItem('cartItem'));

const subtractor = (produto) => {
  if (produto) {
    const cart = getter();
    const index = cart.findIndex(({ id }) => id === produto.id);
    if (index !== NOT_FOUND) {
      if (produto.quantidade <= 1) {
        localStorage
          .setItem('cartItem', JSON
            .stringify((cart.filter(({ id }) => id !== produto.id))));
      } else {
        cart[index].quantidade -= 1;
        localStorage.setItem('cartItem', JSON.stringify(cart));
      }
    }
  }
};

const saver = (produto) => {
  if (produto) {
    const cart = getter();
    const index = cart.findIndex(({ id }) => id === produto.id);
    if (index === NOT_FOUND) {
      produto.quantidade = 1;
      localStorage.setItem('cartItem', JSON.stringify([...cart, produto]));
    } else {
      if (cart[index].quantidade < cart[index].available_quantity) {
        cart[index].quantidade += 1;
      }
      localStorage.setItem('cartItem', JSON.stringify(cart));
    }
  }
};

export { getter, saver, subtractor };
