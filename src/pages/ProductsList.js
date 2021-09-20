import React, { Component } from 'react';

export default class ProductsList extends Component {
  render() {
    const { products } = this.props;
    return (
      <main>
        {products}
      </main>
    );
  }
}
