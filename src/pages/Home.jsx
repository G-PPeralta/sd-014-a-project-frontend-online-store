import React, { Component } from 'react';
import ShoppingIcon from '../components/ShoppingIcon';

export default class Home extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          name="search"
        />
        <ShoppingIcon />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
