import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Home extends Component {
  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI = async () => {
    // const { match: { params: { id } } } = this.props;
    await getCategories();
  };

  render() {
    return (
      <div data-testid="home-initial-message">
        <h1>Digite algum termo de pesquisa ou escolha uma categoria.</h1>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
      </div>
    );
  }
}
export default Home;
