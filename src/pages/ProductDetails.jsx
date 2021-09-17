import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import HomeButton from '../components/HomeButton';
import CartButton from '../components/CartButton';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    const { location: { state: { product } } } = this.props;
    document.title = product.title;
  }

  render() {
    const { location: { state: { product } } } = this.props;
    const { title, price, thumbnail, attributes } = product;
    return (
      <main>
        <header>
          <HomeButton />
          <CartButton />
        </header>
        <Card>
          <Card.Img variant="top" src={ thumbnail } />
          <Card.Body>
            <Card.Title data-testid="product-detail-name">{ title }</Card.Title>
            <ul>
              { attributes.map((att) => (
                <li key={ att.id }>
                  <Card.Text>
                    { `${att.name}: ${att.value_name}`}
                  </Card.Text>
                </li>))}
            </ul>
          </Card.Body>
          <Card.Footer>
            <h5 className="text-muted">{ `R$ ${price}` }</h5>
          </Card.Footer>
        </Card>
      </main>
    );
  }
}

ProductDetails.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ProductDetails;
