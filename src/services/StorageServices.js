const produtos = JSON.parse(localStorage.getItem('cartItem'));
if (!produtos) {
  localStorage.setItem('cartItem', JSON.stringify([]));
}
const getter = () => JSON.parse(localStorage.getItem('cartItem'));
const counterGetter = () => JSON.parse(localStorage.getItem('counters'));

const counters = {};

const cartCounter = () => {
  const idList = getter().map((prod) => prod.id);
  idList.forEach((id) => {
    counters[id] = (idList.filter((n) => id === n)).length;
  });
  localStorage.setItem('counters', JSON.stringify(counters));
};

const saver = (produto) => {
  const cart = getter();
  localStorage.setItem('cartItem', JSON.stringify([...cart, produto]));
  cartCounter();
};

export { getter, saver, counterGetter, cartCounter };
