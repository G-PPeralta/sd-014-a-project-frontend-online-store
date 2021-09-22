// https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage
Storage.prototype.setObj = function setobj(key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};

Storage.prototype.getObj = function getobj(key) {
  return JSON.parse(this.getItem(key));
};

export function addToCart(product) {
  let cartProducts = localStorage.getObj('products');
  if (cartProducts) {
    if (!cartProducts[product.id]) {
      cartProducts[product.id] = { product, quantity: 0 };
    }
    cartProducts[product.id].quantity += 1;
  } else {
    cartProducts = { [product.id]: { product, quantity: 1 } };
  }
  localStorage.setObj('products', cartProducts);
}

export function addEvaluation(evaluation) {
  let objEvaluation = localStorage.getObj('evaluations');
  if (objEvaluation) {
    if (!objEvaluation[evaluation.id]) {
      objEvaluation[evaluation.id] = { evaluation };
    }
  } else {
    objEvaluation = { [evaluation.id]: { evaluation } };
  }
  localStorage.setObj('evaluations', objEvaluation);
}
