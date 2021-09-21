import React from 'react';
import PropTypes from 'prop-types';
import AddCart from '../components/AddCart';
import ToShoppingCart from '../components/ToShoppingCart';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const { title, attributes, thumbnail, price, id } = product;
    return (
      <div>
        <ToShoppingCart />
        <p>pagina de detalhes</p>
        <h3 data-testid="product-detail-name">{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$ ${price}` }</p>
        <p>Especificação Técnica</p>
        {attributes.map(({ name }) => (
          <div key={ name }>
            <p>{name}</p>
          </div>
        ))}
        <AddCart
          product={ product }
          title={ title }
          price={ price }
          id={ id }
          thumbnail={ thumbnail }
        />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
