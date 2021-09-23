export default function addToCart(id, category, qty = 1) {
  const cart = JSON.parse(localStorage.getItem('cart'));

  // se o item já existe, e só alterar o qty, senão cria um novo item no cart
  const updatedCart = cart.find(({ productId }) => productId === id)
    ? cart.map((item) => (
      item.productId === id ? { ...item, qty: item.qty + qty } : item
    ))
    : [...cart, { productId: id, category, qty }];

  localStorage.setItem('cart', JSON.stringify(updatedCart));
}
