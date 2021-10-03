import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';
import Category from '../components/Category';

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

        <div className="d-flex flex-column align-items-center w-75 p-3">
          <div className="d-flex justify-content-around w-100">
            <section className="d-flex w-100 justify-content-center">
              <input
                type="text"
                name="queryInput"
                data-testid="query-input"
                value={ queryInput }
                onChange={ this.handleChange }
                className="w-50"
              />
              <input
                type="button"
                value="Pesquisar"
                data-testid="query-button"
                onClick={ this.handleClick }
                className="btn btn-primary"
              />
            </section>
          </div>

          <div className="d-flex align-items-center flex-column p-3">
            <h4 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h4>
            <div className="d-flex flex-wrap justify-content-center">
              { results && this.renderProducts() }

            </div>
          </div>
        </div>
        <div className="d-flex p-3">
          {/* <CartButton /> */}

        </div>

      </div>
    );
  }
}

export default Home;
