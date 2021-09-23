const SHOPPING_CART_PRODUCTS = 'shopping_cart_products';

export const addLocalStoraged = (key, value) => {
  const valuePrevious = JSON.parse(
    localStorage.getItem(key),
  );
  localStorage.setItem(key, JSON.stringify([...valuePrevious, value]));
};

export const readAssessmentsFiltred = (key, id) => {
  const assessments = JSON.parse(localStorage.getItem(key));
  const assessmentsFiltred = assessments.filter((assessment) => assessment.id === id);
  return assessmentsFiltred;
};

export const createStoraged = (key) => {
  if (!JSON.parse(localStorage.getItem(key))) {
    localStorage.setItem(key, JSON.stringify([]));
  }
};

export const readProducts = () => {
  const products = JSON.parse(
    localStorage.getItem(SHOPPING_CART_PRODUCTS),
  );
  return products;
};

const saveShoppingCartProducts = (cart) => localStorage
  .setItem(SHOPPING_CART_PRODUCTS, JSON.stringify(cart));

export const addProduct = (product) => {
  const producWithQnt = {
    product,
    quantity: 1,
  };
  const products = readProducts();
  const verifyDuplicating = products.some((element) => element.product.id === product.id);
  return verifyDuplicating ? null
    : saveShoppingCartProducts([...products, producWithQnt]);
};

export const removeProduct = (id) => {
  const products = readProducts();
  saveShoppingCartProducts(products.filter((product) => product.product.id !== id));
};
