import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      inputValue: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.callApi();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick(category) { // chamada de api do requisito 5
    const { inputValue } = this.state;
    getProductsFromCategoryAndQuery(category, inputValue)
      .then((json) => this.setState({ products: json.results }));
  }

  callApi = async () => {
    const categoriesList = await getCategories();
    this.setState({
      categories: categoriesList,
    });
  };

  render() {
    const { categories, products } = this.state;
    return (
      <main>
        <label htmlFor="query-input">
          <input
            data-testid="query-input"
            type="search"
            name="inputValue"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Buscar
        </button>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>

        <li
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Ir carrinho de compras
        </li>

        <section>
          {categories.map((category) => ( // função do requisito 4
            <button
              type="button"
              key={ category.id }
              data-testid="category"
              onClick={ () => this.handleClick(category.id) }
            >
              { category.name }
            </button>
          ))}

        </section>
        <div>
          {products && products.map((product) => ( // função do requisito 5
            <div key={ product.id } data-testid="product">
              <img src={ product.thumbnail } alt="foto-produto" />
              <h2>{product.title}</h2>
              <p>{product.price}</p>
            </div>))}
        </div>
      </main>
    );
  }
}

export default Home;
