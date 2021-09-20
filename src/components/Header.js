import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Link } from 'react-router-dom';
import './styles/Header.css';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
    }
  }

  handleSearch = ({ target }) => {
    this.setState({ searchInput: target.value });
  }

  render() {
    const { searchInput } = this.state;
    return (
      <header>
        <ion-icon name="search" />
        <input
          type="text"
          onChange={ this.handleSearch }
          value={ searchInput }
        />
        <Link to="/shopping-cart">
          <ion-icon name="cart-outline" data-testid="shopping-cart-button" />
        </Link>

      </header>
    );
  }
}
