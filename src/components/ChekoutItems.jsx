import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChekoutItems extends Component {
  render() {
    const {
      product: { title, quant, price },
    } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <h4>{quant}</h4>
        <h4>{`Preco Unitario: R$ ${price}`}</h4>
      </div>
    );
  }
}

ChekoutItems.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    quant: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ChekoutItems;
