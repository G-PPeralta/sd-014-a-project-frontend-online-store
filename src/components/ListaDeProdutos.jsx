import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';

class ListaDeProdutos extends Component {
  constructor() {
    super();
    this.state = {
      busca: '',
      produtos: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      busca: e.target.value,
    });
  }

  handleClick = async (e) => {
    const { busca } = this.state;
    e.preventDefault();
    const objListaProdutos = await getProductsFromCategoryAndQuery('', busca);
    this.setState({
      produtos: objListaProdutos.results,
    });
  }

  render() {
    const { produtos } = this.state;
    return (
      <div>
        <SearchBar
          onChange={ this.handleChange }
          onClick={ this.handleClick }
        />
        { produtos.length === 0
          ? <p> Nenhum produto foi encontrado </p>
          : produtos
            .map((produto) => (
              <Link
                data-testid="product-detail-link"
                key={ produto.id }
                to={ `/products/${produto.category_id}/${produto.id}` }
              >
                <ProductCard produto={ produto } />
              </Link>)) }
      </div>
    );
  }
}

export default ListaDeProdutos;
