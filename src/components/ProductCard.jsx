import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div className="card" data-testid="product">
        <img src={ thumbnail } className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{ title }</h3>
          <p className="card-text">{ price }</p>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;

export default ProductCard;
