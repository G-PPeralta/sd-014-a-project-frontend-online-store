import React, { Component } from 'react';

export default class ProductsList extends Component {
  render() {
    return (
      <main>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </main>
    );
  }
}
