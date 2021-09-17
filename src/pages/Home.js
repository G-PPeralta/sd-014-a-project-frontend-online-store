import React from 'react';
import Categories from '../components/Categories';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <main data-testid="home-initial-message">
        <h4>Digite algum termo de pesquisa ou escolha uma categoria.</h4>
        <Categories />
        <Link to="/cart" data-testid="shopping-cart-button">
          <span role="img" aria-label="shopping-cart">&#128722;</span>
        </Link>
      </main>
    );
  }
}
