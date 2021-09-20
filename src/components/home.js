import React from 'react';
import CategoriesList from './CategoriesList';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <h1>Digite algum termo de pesquisa ou escolha uma categoria.</h1>
        <Link to="/ShoppingCart" data-testid="shopping-cart-button">
          <button type="button">Adicionar icone do carrinho aqui</button>
        </Link>
        <CategoriesList />
      </div>
    );
  }
}

export default Home;
