import React, { Component } from 'react';

export default class FreteGratis extends Component {
  render() {
    return (
      <div data-testid="free-shipping">
        <div><i className="fas fa-shipping-fast" /></div>
        <p>Frete Grátis</p>
      </div>
    );
  }
}
