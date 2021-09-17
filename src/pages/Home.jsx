import React, { Component } from 'react';
import CartButton from '../components/CartButton';

export default class Home extends Component {
  render() {
    return (
      <form>
        <label htmlFor="searchTextHome">
          <input type="text" name="searchTextHome" id="searchTextHome" />
        </label>
        <CartButton />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </form>
    );
  }
}
