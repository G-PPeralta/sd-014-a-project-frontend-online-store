import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <main>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Ir carrinho de compras
        </Link>
      </main>
    );
  }
}

export default Home;
