import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';

class ListaDeProdutos extends Component {
  constructor() {
    super();
    this.state = {
      busca: '',
      produtos: [],
      selected: '',
    };
  }

  categorieFilter = async () => {
    const { selected } = this.props;
    const { busca } = this.state;
    const objListaProdutos = await getProductsFromCategoryAndQuery(selected, busca);
    this.setState({
      produtos: objListaProdutos.results,
    });
  }

  componentDidUpdate = (prevProps) => {
    const { selected } = this.props;
    if (prevProps.selected !== selected) {
      this.categorieFilter();
    }
  }

  handleChange = (e) => {
    const { selected } = this.props;
    this.setState({
      busca: e.target.value,
      selected,
    });
  }

  handleClick = async (e) => {
    const { busca, selected } = this.state;
    e.preventDefault();
    const objListaProdutos = await getProductsFromCategoryAndQuery(selected, busca);
    this.setState({
      produtos: objListaProdutos.results,
    });
  }

  render() {
    const { produtos } = this.state;
    return (
      <section>
        <SearchBar
          onChange={ this.handleChange }
          onClick={ this.handleClick }
        />
        <div id="Product-list">
          { produtos.length === 0
            ? <h3> Nenhum produto foi encontrado </h3>
            : produtos
              .map((produto) => (
                <ProductCard key={ produto.id } produto={ produto } />
              )) }
        </div>
      </section>
    );
  }
}

ListaDeProdutos.propTypes = {
  selected: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
};

export default ListaDeProdutos;
