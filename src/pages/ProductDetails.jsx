import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const { title, attributes, thumbnail, price } = product;
    return (
      <div>
        <p>pagina de detalhes</p>
        <h3 data-testid="product-detail-name">{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <p>Especificação Técnica</p>
        {attributes.map(({ name }) => (
          <div key={ name }>
            <p>{name}</p>
          </div>
        ))}
        <button type="button">Adicionar ao Carrinho</button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
