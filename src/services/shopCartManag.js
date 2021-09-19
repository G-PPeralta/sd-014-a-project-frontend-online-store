const PRODUCTS_KEY = 'products';

if (!JSON.parse(localStorage.getItem(PRODUCTS_KEY))) {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify([]));
}
const readproducts = () => JSON.parse(localStorage.getItem(PRODUCTS_KEY)); // JavaScript tem uma função incorporada para converter strings JSON em objetos JavaScript:

const saveproducts = (products) => localStorage
  .setItem(PRODUCTS_KEY, JSON.stringify(products)); // JavaScript também tem uma função incorporada para converter um objeto em uma string JSON:

export const getproducts = () => {
  const products = readproducts();
  return products;
};

export const addProduct = (product) => {
  const productNew = { ...product, counter: 1 };
  const products = readproducts();
  const check = products.some((elemente) => elemente.id === productNew.id);
  if (!check) {
    saveproducts([...products, productNew]);
  } else {
    const array = products.map((s) => {
      if (s.id === productNew.id) {
        s.counter += 1;
      }
      return s;
    });
    saveproducts(array);
  }
};

export const removeProduct = (product) => {
  const products = readproducts();
  saveproducts(products.filter((s) => s.id !== product.id));
};

export const decreaseProduct = (product) => {
  const products = readproducts();
  const expectedProduct = products.find((item) => item.id === product.id);
  const filteredProducts = products.filter((item) => item.id !== product.id);
  const newExpectedProduct = { ...expectedProduct,
    counter: expectedProduct.counter -= 1 };
  const newProducts = [...filteredProducts, newExpectedProduct];
  saveproducts(newProducts);
};
