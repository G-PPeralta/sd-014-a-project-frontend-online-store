import React from 'react';
import ItemCart from '../components/ItemCart';
import {
  readProducts,
  removeProduct,
  sumTotalCartPrice } from '../services/localStorage';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      arrayProduct: readProducts(),
      totalPrice: sumTotalCartPrice(readProducts()),
    };
  }

  quantityChanger = (buttonName, id) => {
    const { arrayProduct } = this.state;
    const selectedProduct = arrayProduct.filter((product) => product.product.id === id);
    const remaningProducts = arrayProduct.filter((product) => product.product.id !== id);
    if (buttonName === 'incrementar') {
      selectedProduct[0].quantity += 1;
    } else if (selectedProduct[0].quantity > 1) {
      selectedProduct[0].quantity -= 1;
    }
    this.setState({
      arrayProduct: [...remaningProducts, ...selectedProduct],
      totalPrice: sumTotalCartPrice([...remaningProducts, ...selectedProduct]),
    });
  }

  removeItem = (id) => {
    removeProduct(id);
    this.setState({
      arrayProduct: readProducts(),
      totalPrice: sumTotalCartPrice(readProducts()),
    });
  }

  render() {
    const { arrayProduct, totalPrice } = this.state;
    return (
      <div>
        {arrayProduct
          .map((product) => (<ItemCart
            key={ product.product.id }
            product={ product }
            quantityChanger={ this.quantityChanger }
            removeItem={ this.removeItem }
          />))}
        { arrayProduct.length === 0
        && <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div> }
        <p>
          Valor total da compra R$
          { totalPrice }
        </p>
        <button type="button">
          Finalizar a compra
        </button>
      </div>
    );
  }
}

export default ShoppingCart;
