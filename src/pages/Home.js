import React from 'react';
import { Link } from 'react-router-dom';

import SearchField from '../components/SearchField';

import Categories from '../components/Categories';


class Search extends React.Component {
  render() {
    return (
      <section>

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <SearchField />

        <Categories />
        <main>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </main>

        <Link to="/Cart" data-testid="shopping-cart-button">
          <button type="submit">Icone do Carrinho</button>
        </Link>
      </section>
    );
  }
}

export default Search;
