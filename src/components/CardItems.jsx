import React from 'react';
import PropTypes from 'prop-types';

export default class CardItems extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <h3>{ product.title }</h3>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>
          { product.price }
        </p>
      </div>
    );
  }
}

CardItems.propTypes = {
  product: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  })),
};

CardItems.defaultProps = {
  product: [],
};
