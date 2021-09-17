import React from 'react';
import ShoppingCartLink from '../components/ShoppingCartLink';

class Main extends React.Component {
  render() {
    return (
      <div>
        <ShoppingCartLink />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Main;
