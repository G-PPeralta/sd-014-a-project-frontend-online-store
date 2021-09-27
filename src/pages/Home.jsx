import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SearchField from '../components/SearchField';

class Home extends React.Component {
  render() {
    const { handleAddToCart } = this.props;
    return (
      <section>
        <Link to="/Cart" data-testid="shopping-cart-button">
          <button type="button">Icone do Carrinho</button>
        </Link>
        <SearchField handleAddToCart={ handleAddToCart } />

        <main>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </main>

      </section>
    );
  }
}

Home.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
};

export default Home;
