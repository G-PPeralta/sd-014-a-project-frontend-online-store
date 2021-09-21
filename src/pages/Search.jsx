import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import SearchInput from '../components/SearchInput';
import CategoriesMenu from '../components/CategoriesMenu';

class Search extends Component {
  render() {
    return (
      <div>
        <SearchInput />
        <CartButton />
        <CategoriesMenu />
      </div>
    );
  }
}

export default Search;
