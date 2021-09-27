import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from './Categories';
import ProductList from './ProductList';

class SearchField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      category: 'MLB5672',
      products: [],
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  fetchProducts = async (category) => {
    const { searchTerm } = this.state;
    const products = await getProductsFromCategoryAndQuery(category, searchTerm);
    this.setState({
      products: products.results,
    });
  }

  render() {
    const { searchTerm, products, category } = this.state;
    const { handleAddToCart } = this.props;
    return (
      <div>
        <Categories handleCategoryChange={ this.fetchProducts } />
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => this.fetchProducts(category) }
        >
          Buscar
        </button>
        <input
          data-testid="query-input"
          type="text"
          name="searchTerm"
          value={ searchTerm }
          onChange={ this.handleChange }
          placeholder="Exemplo: produto 'xxx'"
        />
        <ProductList products={ products } handleAddToCart={ handleAddToCart } />
      </div>
    );
  }
}

SearchField.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
};

export default SearchField;
