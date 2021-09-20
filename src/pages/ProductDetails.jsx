import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { location } = this.props;
    const { state: { title, price, thumbnail, attributes } } = location;
    return (
      <div>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <p>{`R$ ${price}`}</p>
        <p><img src={ thumbnail } alt={ title } /></p>
        <section>
          <ul>
            { attributes.map(({ id, name, value_name: valueName }) => (
              <li key={ id }>{`${name}: ${valueName}`}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default ProductDetails;
