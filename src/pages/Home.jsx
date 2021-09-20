import React, { Component } from 'react';
import Category from '../components/Category';
import CartButton from '../components/CartButton';

class Home extends Component {
  render() {
    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <Category />
        <CartButton />
      </div>
    );
  }
}

export default Home;
