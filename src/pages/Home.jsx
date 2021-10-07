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
      products: undefined,
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
      <>
        <header>
          <SearchField
            searchTerm={ searchTerm }
            category={ category }
            handleChange={ this.handleChange }
            fetchProducts={ this.fetchProducts }
          />
          <Link to="/Cart" data-testid="shopping-cart-button">
            <button type="submit">Icone do Carrinho</button>
          </Link>
        </header>
        <section>
          <Categories handleCategoryChange={ this.fetchProducts } />
          <main>
            { products
              ? (
                <ProductList
                  products={ products }
                  handleAddToCart={ handleAddToCart }
                />
              )
              : (
                <p data-testid="home-initial-message">
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </p>
              )}
          </main>
        </section>
      </>
    );
  }
}

Home.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
};

export default Home;
