import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      queryInput: '',
      results: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = async () => {
    const { queryInput } = this.state;
    const { results } = await getProductsFromCategoryAndQuery('', queryInput);
    this.setState({
      results,
    });
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  renderProducts() {
    const { results } = this.state;
    return results.map((item) => (
      <ProductCard product={ item } key={ item.id } />
    ));
  }

  render() {
    const { queryInput, results } = this.state;
    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <section>
          <input
            type="text"
            name="queryInput"
            data-testid="query-input"
            value={ queryInput }
            onChange={ this.handleChange }
          />
          <input
            type="button"
            value="Pesquisar"
            data-testid="query-button"
            onClick={ this.handleClick }
          />
        </section>
        { results && this.renderProducts() }
      </div>
    );
  }
}

export default Home;
