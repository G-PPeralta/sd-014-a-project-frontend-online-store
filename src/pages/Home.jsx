import React from 'react';
import CartButton from '../components/CartButton';

class Home extends React.Component {
  constructor(props) {
    super(props);

    document.title = 'Home';
  }

  render() {
    return (
      <main>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CartButton />
      </main>
    );
  }
}

export default Home;
