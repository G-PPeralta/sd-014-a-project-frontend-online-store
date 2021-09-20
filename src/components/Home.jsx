import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <main>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/35/000000/external-cart-grocery-flatart-icons-outline-flatarticons.png" alt="cart" />
        </Link>
      </main>
    );
  }
}

export default Home;
