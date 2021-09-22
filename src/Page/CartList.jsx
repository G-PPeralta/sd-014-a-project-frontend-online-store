import React from 'react';
import PropTypes from 'prop-types';

class CartList extends React.Component {
  render() {
    const { cartList, addCart } = this.props;
    const produto = Object.keys(cartList);
    let total = 0;
    const DECREASE_VAR = -1; // variavel para diminuir a quantidade;
    if (produto.length !== 0) {
      produto.map((name) => {
        const precoProduto = Number(cartList[name][0]) * cartList[name][1];
        total += precoProduto;
        return true;
      });

      return (
        <div>
          {produto
            && produto.map((name, index) => (
              <div key={ name + index }>
                <p data-testid="shopping-cart-product-name">
                  {name}
                </p>
                <button
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ (event) => {
                    addCart(event, name, cartList[name][1]);
                  } }
                >
                  +
                </button>
                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ (event) => {
                    addCart(event, name, cartList[name][1], DECREASE_VAR);
                  } }
                >
                  -
                </button>
                <p data-testid="shopping-cart-product-quantity">
                  {' '}
                  {cartList[name][0]}
                </p>
                <p>
                  Price:
                  {`${(cartList[name][1] * Number(cartList[name][0]))
                    .toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}`}
                </p>
              </div>
            ))}
          <p>
            Total Price:
            {`${total.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
            `}
          </p>
        </div>
      );
    }
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
  }
}

CartList.propTypes = {
  cartList: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  addCart: PropTypes.func.isRequired,
};

export default CartList;
