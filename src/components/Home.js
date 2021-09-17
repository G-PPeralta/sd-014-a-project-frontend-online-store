import React, { Component } from 'react';
import Categorias from './Categorias';

class Home extends Component {
  render() {
    return (
      <main>
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
        <Categorias/>
      </main>
    );
  }
}

export default Home;
