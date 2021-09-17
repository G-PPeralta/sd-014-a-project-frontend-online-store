import React from 'react';
import CategoriesList from '../Components/CategoriesList';
import CartButton from '../Components/CartButton';

class Home extends React.Component {
  render() {
    return (
      <header data-testid="home-initial-message">
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <CategoriesList />
        <CartButton />
      </header>
    );
  }
}

export default Home;
