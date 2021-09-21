import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import SearchInput from '../components/SearchInput';
import CategoriesMenu from '../components/CategoriesMenu';
import { getProductsFromCategoryAndQuery } from '../services/api';
import SearchProduct from '../components/SearchProduct';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      inputSearch: '',
      arrayProduct: [],
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  getCategoryId = (categoryId) => {
    this.setState({ category: categoryId });
  }

  fetchSearchProduct = async () => {
    const { inputSearch, category } = this.state;
    const items = await getProductsFromCategoryAndQuery(category, inputSearch);
    this.setState({
      arrayProduct: items.results,
    });
  }

  render() {
    const { arrayProduct, inputSearch } = this.state;
    return (
      <div>
        <CartButton />
        <CategoriesMenu
          getCategoryId={ this.getCategoryId }
          handleChange={ this.handleChange }
          fetchSearchProduct={ this.fetchSearchProduct }
        />
        <SearchInput
          inputSearch={ inputSearch }
          handleChange={ this.handleChange }
          fetchSearchProduct={ this.fetchSearchProduct }
        />
        <SearchProduct
          arrayProduct={ arrayProduct }
        />
      </div>
    );
  }
}

export default Search;
