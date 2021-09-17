import React from 'react';
import CartButton from '../Components/CartButton';

class Home extends React.Component {
  render() {
    return (
      <main>
        <header data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </header>
        <CartButton />
      </main>
    );
  }
}

export default Home;
