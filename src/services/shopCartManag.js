const PRODUCTS_KEY = 'products';

if (!JSON.parse(localStorage.getItem(PRODUCTS_KEY))) {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify([]));
}
const readProducts = () => JSON.parse(localStorage.getItem(PRODUCTS_KEY)); // JavaScript tem uma função incorporada para converter strings JSON em objetos JavaScript:

const saveProducts = (products) => localStorage
  .setItem(PRODUCTS_KEY, JSON.stringify(products)); // JavaScript também tem uma função incorporada para converter um objeto em uma string JSON:

export const getProducts = () => {
  const products = readProducts();
  return products;
};

export const addProduct = (product) => {
  const productNew = { ...product, counter: 1 };
  const products = readProducts();
  const check = products.some((elemente) => elemente.id === productNew.id);
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
