import React from 'react';
import { Link } from 'react-router-dom';
import SearchField from '../components/SearchField';

class Search extends React.Component {
  render() {
    return (
      <section>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <SearchField />
        <Link to="/Cart" data-testid="shopping-cart-button">
          <button type="submit">Icone do Carrinho</button>
        </Link>
      </section>
    );
  }
}

export default Search;
