import React, { Component } from 'react';
import MarketButton from './MarketButton';
import ListaDeProdutos from './ListaDeProdutos';
import { getCategories } from '../services/api';
import ListCategory from './ListCategory';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      retornoCategory: [],
    };
  }

  componentDidMount() {
    getCategories().then((result) => this.setState({ retornoCategory: result }));
  }

  render() {
    const { retornoCategory } = this.state;
    return (
      <div data-testid="home-initial-message">
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <ListaDeProdutos />
        <ListCategory categoryList={ retornoCategory } />
        <MarketButton />
      </div>
    );
  }
}

export default Home;
