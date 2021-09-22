export default function addToCart(id, category) {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const cartItem = cart.find(({ productId }) => productId === id);
  console.log(cartItem);
  const qty = cartItem ? cartItem.qty + 1 : 1;
  const newItem = { productId: id, category, qty };
  localStorage.setItem('cart', JSON.stringify([...cart, newItem]));
}

/*
[
    {
        "id": "MLB2023133600",
        "category": "MLB253383",
        "qty": 2
    },
    {
        "id": "MLB2023133600",
        "category": "MLB253383",
        "qty": 5
    },
    {
        "id": "MLB2023133600",
        "category": "MLB253383",
        "qty": 5
    }
]
*/

/* if (cart.lenght === 0) {
  return <p>Seu carrinho está vazio</p>
  }
*/
