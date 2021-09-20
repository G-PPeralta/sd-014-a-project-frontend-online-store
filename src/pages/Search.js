import React from 'react';
import Categories from '../components/Categories';

class Search extends React.Component {
  render() {
    return (
      <section>
        <Categories />
        <main>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </main>
      </section>
    );
  }
}

export default Search;
