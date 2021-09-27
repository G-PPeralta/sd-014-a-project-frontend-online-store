import React, { Component } from 'react';
import { getCartItens } from '../services/AddToCart';

export default class totalyProduct extends Component {
  constructor() {
    super();
    this.state = {
      // totalProducts: 0,
    };
  }
  getNumberOfProductsInCar() {
    let totalProducts = 0;
    // const { totalProducts } = this.state
    console.log(totalProducts);
    const cartProducts = getCartItens();
    console.log(cartProducts);

    // this.setState((estadoAnterior,_props) => {
    //   console.log(cartProducts);

    //   cartProducts.forEach((product) => {
    //     totalProducts:  estadoAnterior.totalProducts += product.quantidade;
    //     });
    //     console.log(totalProducts);

    // })

    cartProducts.forEach((product) => {
      totalProducts += product.quantidade;
      console.log(totalProducts);
    });
    // console.log(totalProducts);
    return totalProducts;
  }

  render() {
    return (
      <div>
        <div data-testid="shopping-cart-size" className="total-products">
          {this.getNumberOfProductsInCar()}
        </div>
      </div>
    );
  }
}
