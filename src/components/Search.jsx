import React from 'react';
import CartButton from './CartButton';

class Search extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CartButton />
      </div>
    );
  }
}

export default Search;
