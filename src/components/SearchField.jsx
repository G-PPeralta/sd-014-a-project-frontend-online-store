import React, { Component } from 'react';
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

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.fetchProducts.bind(this);
  }

  componentDidMount() {
    // this.fetchProducts();
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, () => { this.fetchProducts(); });
  }

  async fetchProducts() {
    const { searchTerm, category } = this.state;
    // console.log('term => ', searchTerm, 'category =>', category);
    const products = await getProductsFromCategoryAndQuery(category, searchTerm);
    // console.log('products', products);
    this.setState({
      products: products.results,
    });
  }

  render() {
    const { searchTerm, products, category } = this.state;
    return (
      <div>
        <Categories handleCategoryChange={ this.handleChange } value={ category } />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.fetchProducts }
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
        <ProductList products={ products } />
      </div>
    );
  }
}

export default SearchField;
