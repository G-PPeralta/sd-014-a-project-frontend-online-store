import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <section className="search-section">
        <div>
          <input
            className="search-input"
            id="search-input"
            name="search-input"
            type="text"
          />
          <Link data-testid="shopping-cart-button" to="/shopping-cart">
            <img
              alt="shopping-cart"
              src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
            />
          </Link>
        </div>
        <p className="home-initial-message" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}
