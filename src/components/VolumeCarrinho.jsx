import React, { Component } from 'react';

class VolumeCarrinho extends Component {
  constructor() {
    super();
    this.calcularVolume = this.calcularVolume.bind(this);
  }

  calcularVolume() {
    const { cartItems } = this.props;
    let acumulador = 0;
    if (cartItems === null || cartItems === undefined) {
      console.log('null');
    } else {
      for (let i = 0; i < cartItems.length; i += 1) {
        acumulador += i.quantidade;
      }
      return acumulador;
    }
  }

  render() {
    return (
      <div data-testid="shopping-cart-size">
        {this.calcularVolume()}
      </div>
    );
  }
}

export default VolumeCarrinho;
