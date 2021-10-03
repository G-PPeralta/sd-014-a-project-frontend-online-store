import React, { Component } from 'react';
import { CodeSquare } from 'react-bootstrap-icons';
import CartButton from './CartButton';

export default class Header extends Component {
  render() {
    return (
      <header
        data-testid="header-component"
        id="header"
        className="d-flex justify-content-between"
      >
        <div className="d-flex">
          <CodeSquare size={ 35 } color="#2fc18c" className="m-1" />

          <h2 className="text-white">Frontend online store</h2>
        </div>
        <CartButton />

      </header>
    );
  }
}
