import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Message from './Message';

class PaymentProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <li className="d-flex flex-column m-auto mt-3">
        <Card className="d-flex flex-row w-100 p-3">
          <Card.Img
            style={ { width: '50px', height: '50px' } }
            className="img-thumbnail m-auto"
            variant="top"
            src={ thumbnail }
          />
          <Card.Body className="m-3">
            <h4 data-testid="product-detail-name">{ `R$ ${price}` }</h4>
            <p className="text-muted">{ title }</p>
            { product.shipping.free_shipping
              && (<Message
                message="Frete Grátis"
                className="text-success"
                dataTestId="free-shipping"
              />) }
          </Card.Body>
        </Card>
      </li>
    );
  }
}

PaymentProductCard.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default PaymentProductCard;
