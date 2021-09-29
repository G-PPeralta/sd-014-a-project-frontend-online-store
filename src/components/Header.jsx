import React, { Component } from 'react';
import { CodeSquare } from 'react-bootstrap-icons';

export default class Header extends Component {
  render() {
    return (
      <header data-testid="header-component" id="header">
        <div className="d-flex">
          <CodeSquare size={ 35 } color="#2fc18c" className="m-1" />

          <h2 className="text-white">Frontend online store</h2>
        </div>

      </header>
    );
  }
}
