import React from 'react';
import Categories from '../components/Categories';
import SearchInput from '../components/inputs/SearchInput';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';
import ShoppingCartIcon from '../components/ShoppingCartIcon';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      search: [],
      product: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    if (!localStorage.getItem('carrinho')) {
      localStorage.setItem('carrinho', JSON.stringify([]));
    }
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      product: value,
    });
  }

  async handleClick() {
    const { product } = this.state;
    const response = await getProductsFromCategoryAndQuery(null, product);
    this.setState({
      search: response.results,
    });
  }

  render() {
    const { search, product } = this.state;
    return (
      <main>
        <section>
          <ul>
            <Categories />
          </ul>
          <SearchInput
            name={ product }
            handleChange={ this.handleChange }
            handleClick={ this.handleClick }
          />
          <ShoppingCartIcon />
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
        </section>
        <section>
          <ProductCard stateSearch={ search } />
        </section>
      </main>
    );
  }
}

export default Home;
