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
        <div className="search-icon">
          <ion-icon name="search" />
        </div>
        <input
          type="text"
          onChange={ this.handleSearch }
          value={ searchInput }
        />
        <Link to="/shopping-cart">
          <div className="cart-icon">
            <ion-icon name="cart-outline" data-testid="shopping-cart-button" />
          </div>
        </Link>

      </header>
    );
  }
}
