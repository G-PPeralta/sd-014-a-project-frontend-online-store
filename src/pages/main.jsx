import React from 'react';
import { Link } from 'react-router-dom';

class main extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <h2>Digite algum termo de pesquisa ou escolha uma categoria.</h2>
        <Link to="/shoppingCart">
          <button
            type="button"
            data-testid="shopping-cart-button"
            placeholder="carrinho"
          >
            carrinho
          </button>
        </Link>
      </div>
    );
  }
}

export default main;
