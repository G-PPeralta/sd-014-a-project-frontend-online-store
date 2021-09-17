import React, { Component } from 'react';
import MarketButton from './MarketButton';
import ListaDeProdutos from './ListaDeProdutos';
import MarketButton from './MarketButton';


class Home extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <ListaDeProdutos />
        <MarketButton />
      </div>
    );
  }
}

export default Home;
