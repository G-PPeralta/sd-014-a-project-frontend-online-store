import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChekoutItems extends Component {
  render() {
    const {
      product: { title, quant, price },
    } = this.props;
    return (
      <div className="d-flex w-100 justify-content-between my-2">
        <h6>{title}</h6>
        <p>{`R$ ${price}`}</p>
        <p>{`Qtd: ${quant}`}</p>
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
