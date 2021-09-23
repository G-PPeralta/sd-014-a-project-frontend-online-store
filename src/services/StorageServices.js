const produtos = JSON.parse(localStorage.getItem('cartItem'));
if (!produtos) {
  localStorage.setItem('cartItem', JSON.stringify([]));
}
const getter = () => JSON.parse(localStorage.getItem('cartItem'));
// const counterGetter = () => JSON.parse(localStorage.getItem('counters'));

// const finder = (added) => produtos.find((produto) => produto.id === added);

// const counters = {};

// const cartIncrement = (produto) => {
//   counters[produto.id] = (produto.quantidade + 1);
//   localStorage.setItem('counters', JSON.stringify(counters));
// };

const saver = (produto) => {
  const cart = getter();
  // if ((produtos.length >= 1) && (finder(produto.id) === true)) cartIncrement(produto);
  produto.quantidade = 1;
  localStorage.setItem('cartItem', JSON.stringify([...cart, produto]));
};

export { getter, saver };
