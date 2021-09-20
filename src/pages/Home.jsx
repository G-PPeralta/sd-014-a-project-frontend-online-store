import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';
import Category from '../components/Category';
import CartButton from '../components/CartButton';

// agora vai
class Home extends Component {
  constructor() {
    super();
    this.state = {
      queryInput: '',
      category: '',
      results: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCategories = this.handleCategories.bind(this);
  }

  handleClick = async () => {
    const { queryInput, category } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(category, queryInput);
    this.setState({
      results,
    });
  }

  handleCategories({ target: { value } }) {
    this.setState({ category: value }, () => {
      this.handleClick();
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
      <div className="d-flex">
        <Category onChange={ this.handleCategories } />

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
        <CartButton />
      </div>
    );
  }
}

export default Home;
