import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import Products from './Products';

class Home extends Component {
  render() {
    return (
      <main>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Products />
        <Link data-testid="shopping-cart-button" to="/cart">
          <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/35/000000/external-cart-grocery-flatart-icons-outline-flatarticons.png" alt="cart" />
        </Link>
        <Categories />
      </main>
    );
  }
}

export default Home;
