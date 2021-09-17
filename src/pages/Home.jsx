import React from 'react';
import CartButton from '../Components/CartButton';
import CategoriesList from '../Components/CategoriesList';

class Home extends React.Component {
  render() {
    return (
      <main>
        <header data-testid="home-initial-message">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          <CategoriesList />
        </header>
        <span>
          <CartButton />
        </span>
      </main>
    );
  }
}

export default Home;
