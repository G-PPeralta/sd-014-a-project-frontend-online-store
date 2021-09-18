const PRODUCTS_KEY = 'products';

if (!JSON.parse(localStorage.getItem(PRODUCTS_KEY))) {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify([]));
}
const readproducts = () => JSON.parse(localStorage.getItem(PRODUCTS_KEY));

const saveproducts = (products) => localStorage
  .setItem(PRODUCTS_KEY, JSON.stringify(products));

export const getproducts = () => {
  const products = readproducts();
  return products;
};

export const addProduct = (product) => {
  if (product) {
    const products = readproducts();
    saveproducts([...products, product]);
  }
};

export const removeProduct = (product) => {
  const products = readproducts();
  saveproducts(products.filter((s) => s.id !== product.id));
};

export const counterProduct = (product) => {
  const products = readproducts();
  products.reduce((acc, productId) => (
    if(acc.lenght === 0){
      const {[productId]: 1 }puch acc
      return(acc)
    }
    if()
  ), []);



  

  saveproducts();
};
