import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import Products from './Products';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <main>
        <header>
          <img className="img-logo" src="https://logodownload.org/wp-content/uploads/2017/11/kabum-logo-4.png" alt="logo" />
          <div className="pesquisa">
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <Products />
          </div>
          <Link data-testid="shopping-cart-button" to="/cart">
            <img className="img-cart" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/ffffff/external-shopping-cart-interface-kiranshastry-solid-kiranshastry.png" alt="cart" />
          </Link>
        </header>
        <Categories />
      </main>
    );
  }
}

export default Home;
