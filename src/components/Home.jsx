import React, { Component } from 'react';
import ListaDeProdutos from './ListaDeProdutos';

class Home extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <ListaDeProdutos />
      </div>
    );
  }
}

export default Home;
