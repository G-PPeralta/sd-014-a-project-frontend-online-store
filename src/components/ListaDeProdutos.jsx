import React, { Component } from 'react';
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
    e.preventDefault();
    const { busca } = this.state;
    const objListaProdutos = await getProductsFromCategoryAndQuery('', busca);
    console.log(objListaProdutos);
    this.setState({
      produtos: objListaProdutos.results,
    });
  }

/*   mainLista = (produtos) => {
    produtos.map((produto) => (<ProductCard key={ produto.id } produto={ produto } />));
  } */

  render() {
    const { produtos } = this.state;
    return (
      <div>
        <SearchBar
          onChange={ this.handleChange }
          onClick={ this.handleClick }
        />
        { produtos.map((produto) => <ProductCard key={ produto.id } produto={ produto } />) }
      </div>
    );
  }
}

export default ListaDeProdutos;
