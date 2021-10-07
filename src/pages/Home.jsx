import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Categories from '../components/Categories';
import ProductList from '../components/ProductList';
import SearchField from '../components/SearchField';

import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
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
      <section>
        <Categories handleCategoryChange={ this.fetchProducts } />
        <SearchField
          searchTerm={ searchTerm }
          category={ category }
          handleChange={ this.handleChange }
          fetchProducts={ this.fetchProducts }
        />
        <main>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <ProductList products={ products } handleAddToCart={ handleAddToCart } />
        </main>
        <Link to="/Cart" data-testid="shopping-cart-button">
          <button type="submit">Icone do Carrinho</button>
        </Link>
      </section>
    );
  }
}

Home.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
};

export default Home;
