import React from 'react';
import ItemCart from '../components/ItemCart';
import { readProducts, sortString } from '../services/localStorage';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      arrayProduct: readProducts(),
    };
  }

  quantityChanger = (buttonName, id) => {
    const { arrayProduct } = this.state;
    const selectedProduct = arrayProduct.filter((product) => product.product.id === id);
    const remaningProducts = arrayProduct.filter((product) => product.product.id !== id);
    if (buttonName === 'incrementar') {
      selectedProduct[0].quantity += 1;
    } else if (buttonName === 'decrementar' && selectedProduct[0].quantity > 1) {
      selectedProduct[0].quantity -= 1;
    }
    this.setState({
      arrayProduct: [...remaningProducts, ...selectedProduct]
        .sort((a, b) => sortString(a, b)),
    });
  }

  render() {
    const { arrayProduct } = this.state;
    return (
      <div>
        {arrayProduct
          .map((product) => (<ItemCart
            key={ product.product.id }
            product={ product }
            quantityChanger={ this.quantityChanger }
          />))}
        <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
      </div>
    );
  }
}

export default ShoppingCart;
