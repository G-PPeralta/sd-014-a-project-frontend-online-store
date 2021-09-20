import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import Sidebar from '../components/Sidebar';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI = async () => {
    const result = await getCategories();
    this.setState({ categories: result });
  };

  render() {
    const { categories } = this.state;
    return (
      <div data-testid="home-initial-message">
        <h1>Digite algum termo de pesquisa ou escolha uma categoria.</h1>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
        { categories.map(({ id, name }) => (
          <Sidebar key={ id } categories={ name } />
        )) }
      </div>
    );
  }
}
export default Home;
