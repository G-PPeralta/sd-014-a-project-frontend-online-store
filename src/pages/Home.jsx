import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <section>
        <input type="text" />
        <Link to="/carrinho" data-testid="shopping-cart-button">
          <button type="button">Carrinho</button>
        </Link>
        <section>
          <h1
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
        </section>
      </section>
    );
  }
}

export default Home;
