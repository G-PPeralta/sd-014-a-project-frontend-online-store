const PRODUCTS_KEY = 'products';

if (!JSON.parse(localStorage.getItem(PRODUCTS_KEY))) {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify([]));
}

export const readProductsInCart = () => JSON.parse(localStorage.getItem(PRODUCTS_KEY));

const saveProductsInCart = (productsInCart) => {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(productsInCart));
};

export const removeProductFromCart = (product) => {
  const productsInCart = readProductsInCart();
  saveProductsInCart(productsInCart.filter((p) => product.id !== p.id));
};

export const reduceProductInCart = (product) => {
  // const thisProduct = readProductsInCart().find((item) => product.id === item.id )
  if (product.inMyCart < 2) removeProductFromCart(product);
  else {
    product.inMyCart = -1;
    saveProductsInCart([...readProductsInCart(), product]);
  }
};

export const addProductToCart = (product) => {
  const buffer = product;
  if (buffer.inMyCart > 0) {
    removeProductFromCart(product);
    buffer.inMyCart += 1;
  }

  saveProductsInCart([...readProductsInCart(), buffer]);
};

export const rasterizeCart = () => {
  if (readProductsInCart().length < 1) return null;

  const rasterized = readProductsInCart().map((item) => {
    let counter = 0;
    readProductsInCart().filter((product) => {
      if (product.id === item.id) {
        counter += 1;
        return false;
      } return true;
    });
    item.inMyCart = counter;
    return item;
  });

  // const rasterized = readProductsInCart().filter((item) => {
  //   pra eu precisaria receber o objeto na função pra fazer esse filter, mas pra isso eu teria que ter uma outra função/componente/whatever que vai iterar por todo o readProductsIncart e mandar item por item para cá
  // });

  localStorage.clear();
  saveProductsInCart([...rasterized]);
};

// A idéia do rasterizador é checar se há duplicas no LocalStorage e filtrar elas. Além disso, ele vai iterar no inMyCart, que é um counter que eu inseri como chave em cada Product, e vai adicionar com cada duplicata que ele acha. O motivo disso é que implementar uma lógica fora do MyCart pra não ter duplicata dentro do LocalStorage é meio que um pesadelo, então achei esse método de rasterização uma boa alternativa. Por enquanto...
