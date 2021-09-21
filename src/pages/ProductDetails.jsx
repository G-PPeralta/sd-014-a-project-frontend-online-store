import React from 'react';
import PropTypes from 'prop-types';
import ToShoppingCart from '../components/ToShoppingCart';
import FormAvaliacao from '../components/FormAvaliacao';
import saveLocalStorage from '../services/localStorage';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carShop: true,
    };
  }

  handleClick = () => {
    this.setState({
      carShop: true,
    });
  }

  render() {
    const { location: { state: { product } } } = this.props;
    const { title, attributes, thumbnail, price, id } = product;
    const { carShop } = this.state;
    return (
      <div>
        <ToShoppingCart carShop={ carShop } />
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
        <div>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => {
              saveLocalStorage(product);
              this.handleClick();
            } }
          >
            Adicionar ao Carrinho!
          </button>
        </div>
        <FormAvaliacao id={ id } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
