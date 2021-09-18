import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import HomeButton from '../components/HomeButton';
import CartButton from '../components/CartButton';
import Header from '../components/Header';
import AddToCardButton from '../components/AddToCardButton';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    const { location: { state: { product } } } = this.props;
    document.title = product.title;

    this.state = {
      homeIs: false,
    };
  }

  render() {
    const { location: { state: { product } } } = this.props;
    const { title, price, thumbnail, attributes } = product;
    const { homeIs } = this.state;
    return (
      <div>
        <Header>
          <div>
            <h5 className="text-white">{title}</h5>
          </div>
          <div>
            <HomeButton />
            <CartButton />
          </div>
        </Header>
        <main style={ { width: '80%' } } className="d-flex flex-column m-auto mt-3">
          <Card className="d-flex flex-row border-bottom-0 w-100 p-3">
            <Card.Img
              style={ { width: '200px' } }
              className="img-thumbnail"
              variant="top"
              src={ thumbnail }
            />
            <Card.Body className="m-3">
              <h4 data-testid="product-detail-name">{ title }</h4>
              <Card.Text>
                { attributes.map((att) => (
                  <li key={ att.id }>
                    { `${att.name}: ${att.value_name}`}
                  </li>
                ))}
              </Card.Text>
              <AddToCardButton product={ product } homeIs={ homeIs } />
            </Card.Body>
          </Card>
          <Card.Footer>
            <h5 className="text-muted">{ `R$ ${price}` }</h5>
          </Card.Footer>
        </main>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ProductDetails;
