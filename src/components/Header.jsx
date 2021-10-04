import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CodeSquare, House } from 'react-bootstrap-icons';
import CartButton from './CartButton';

export default class Header extends Component {
  render() {
    return (
      <header
        data-testid="header-component"
        id="header"
      >
        <div className="d-flex align-items-start w-100">
          <CodeSquare size={ 35 } color="#2fc18c" />

          <h2 className="text-white">Frontend online store</h2>
        </div>
        <div className="d-flex justify-content-between">
          <Link to="/" className="nav-link"><House size={ 30 } /></Link>
          <CartButton />
        </div>
      </header>
    );
  }
}
