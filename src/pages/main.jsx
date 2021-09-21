import React from 'react';
import { Link } from 'react-router-dom';
import ListaDeCategorias from '../components/ListaDeCategorias';
import { getCategories } from '../services/api';
import ListaDeProdutos from '../components/ListaDeProdutos';

class main extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      selected: '',
    };
  }

  componentDidMount() {
    getCategories().then((dados) => this.setState({ categories: dados }));
  }

  categorieHandler = (e) => {
    e.preventDefault();
    this.setState({
      selected: e.target.value,
    });
  }

  render() {
    const { categories, selected } = this.state;
    return (
      <div data-testid="home-initial-message">
        <h2>Digite algum termo de pesquisa ou escolha uma categoria.</h2>
        <Link to="/shoppingCart">
          <button
            type="button"
            data-testid="shopping-cart-button"
            placeholder="carrinho"
          >
            carrinho
          </button>
        </Link>
        {categories
          .map((categoria) => (
            <ListaDeCategorias
              key={ categoria.id }
              categoria={ categoria }
              onClick={ this.categorieHandler }
            />)) }
        <ListaDeProdutos selected={ selected } />
      </div>
    );
  }
}

export default main;
