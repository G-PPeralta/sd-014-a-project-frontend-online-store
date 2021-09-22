const PRODUCTS_KEY = 'products';

if (!JSON.parse(localStorage.getItem(PRODUCTS_KEY))) {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify([]));
}
export const readProducts = () => JSON.parse(localStorage.getItem(PRODUCTS_KEY)); // JavaScript tem uma função incorporada para converter strings JSON em objetos JavaScript:

const saveProducts = (products) => localStorage
  .setItem(PRODUCTS_KEY, JSON.stringify(products)); // JavaScript também tem uma função incorporada para converter um objeto em uma string JSON:

export const getProducts = () => {
  const products = readProducts();
  return products;
};

export const addProduct = (product) => {
  const productNew = { ...product, counter: 1 };
  const products = readProducts();
  const check = products.some((element) => element.id === productNew.id);
  if (!check) {
    saveProducts([...products, productNew]);
  } else {
    const array = products.map((s) => {
      if (s.id === productNew.id) {
        s.counter += 1;
      }
      return s;
    });
    saveProducts(array);
  }
};

export const removeProduct = (product) => {
  const products = readProducts();
  saveProducts(products.filter((s) => s.id !== product.id));
};

export const decreaseProduct = (product) => {
  const products = readProducts();
  const expectedProduct = products.find((item) => item.id === product.id);
  const filteredProducts = products.filter((item) => item.id !== product.id);
  const newExpectedProduct = { ...expectedProduct,
    counter: expectedProduct.counter -= 1 };
  const newProducts = [...filteredProducts, newExpectedProduct];
  saveProducts(newProducts);
};

export const getQuantityOfProducts = () => {
  const products = readProducts();
  let quantity = 0;
  if (products.length === 0) {
    return quantity;
  }
  products.forEach((product) => { quantity += Number(product.counter); });
  return quantity;
};

export const addMessage = (product, rate) => {
  const productNew = { ...product, rate: [rate] };
  const products = readProducts();

  const array = products.map((s) => {
    if (s.id === productNew.id) {
      if (!s.rate) {
        s.rate = productNew.rate;
      } else {
        s.rate.push(...productNew.rate);
      }
    }
    return s;
  });
  saveProducts(array);
};
