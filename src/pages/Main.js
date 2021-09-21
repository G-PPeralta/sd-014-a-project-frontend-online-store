import React from 'react';
import ShoppingCartLink from '../components/ShoppingCartLink';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../components/Categories';
import Product from '../components/Product';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      search: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    getCategories().then((response) => {
      this.setState({ categories: response });
    });
  }

  handleCategorie(id) {
    getProductsFromCategoryAndQuery(id, '')
      .then((productsCategories) => (
        this.setState({ products: productsCategories.results })
      ));
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick() {
    const { search } = this.state;
    getProductsFromCategoryAndQuery(search, search).then((response) => {
      this.setState({
        products: response.results,
        search: '',
      });
      console.log(response.results);
    });
  }

  render() {
    const { categories, search, products } = this.state;

    if (products.length > 0) {
      return (
        <div>
          <ShoppingCartLink />
          <input
            type="text"
            data-testid="query-input"
            name="search"
            value={ search }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
          { products
            .map((product) => <Product key={ product.id } product={ product } />) }
        </div>
      );
    }

    return (
      <div>
        <ShoppingCartLink />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input
          type="text"
          data-testid="query-input"
          name="search"
          value={ search }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <hr />
        <div>
          { categories
            .map((categorie) => (<Categories
              key={ categorie.id }
              categorie={ categorie.name }
              handleCategorie={ () => this.handleCategorie(categorie.id) }
            />))}
        </div>
      </div>
    );
  }
}

export default Main;
