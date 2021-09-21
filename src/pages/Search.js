import React from 'react';
import CategoriesList from '../components/CategoriesList';

class Search extends React.Component {
  render() {
    return (
      <section>
        <CategoriesList />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

export default Search;
