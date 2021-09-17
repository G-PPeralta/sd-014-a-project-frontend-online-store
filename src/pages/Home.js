import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <span role="img" aria-label="shopping-cart">&#128722;</span>
        </Link>
      </div>
    );
  }
}
