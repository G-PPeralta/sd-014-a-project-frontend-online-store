export const sortString = (a, b) => { // função para 'sortear' a chave arrayProduct do state ShoppingCart, corrige bug quando incrementa um item no cart.
  const NUMBER_FOR_SORT = -1;
  if (a.product.title < b.product.title) {
    return NUMBER_FOR_SORT;
  }
  if (a.product.title > b.product.title) {
    return 0;
  }
  return 0;
};

export const sumTotalCartPrice = (array) => {
  let sum = 0;
  array.forEach((product) => {
    sum += product.product.price * product.quantity;
  });
  return sum;
};

export const addKeyWithValue = (object, key, value) => {
  const newObject = object;
  newObject[key] = value;
  return newObject;
};
