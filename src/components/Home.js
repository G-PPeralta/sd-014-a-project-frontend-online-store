import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input type="text" />
        </label>
        <div>
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">Carrinho</Link>
        </div>
      </div>
    );
  }
}

export default Home;
