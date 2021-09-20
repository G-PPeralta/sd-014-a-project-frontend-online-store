import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import SearchInput from '../components/SearchInput';

class Search extends Component {
  render() {
    return (
      <div>
        <SearchInput />
        <CartButton />
      </div>
    );
  }
}

export default Search;
