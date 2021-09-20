import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import SearchBar from './SearchBar';
// import card from './card';

export class ListaDeProdutos extends Component {
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

  mainLista = (produtos) => {
    produtos.map((produto) => (<ProductCard key={ produto.id } iten={ produto } />));
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
          : mainLista(produtos)}
      </div>
    );
  }
}

export default ListaDeProdutos;
