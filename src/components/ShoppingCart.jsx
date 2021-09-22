import React from 'react';

class ShoppingCart extends React.Component {
  //  operation recebe atributos increase ou decrease
  renderQuantityButton = (operation) => (
    <button
      type="button"
      data-testid={ `product-${operation}-quantity` }
      onClick={ this.handleClick }
    >
      { (operation === 'decrease' ? '-' : '+') }
    </button>
  );

  render() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        { this.renderQuantityButton('increase') }
        { this.renderQuantityButton('decrease') }
      </div>
    );
  }
}

export default ShoppingCart;
