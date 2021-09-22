import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartLink from './ShoppingCartLink';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTitle: '',
      selectedThumbnail: '',
      selectedPrice: '',
    };
    this.handleState = this.handleState.bind(this);
    this.toLocalStorage = this.toLocalStorage.bind(this);
  }

  componentDidMount() {
    this.handleState();
  }

  handleState() {
    const { location } = this.props;
    const { title, thumbnail, price } = location.state;
    this.setState({
      selectedTitle: title,
      selectedThumbnail: thumbnail,
      selectedPrice: price,
    });
  }

  toLocalStorage() {
    const { selectedTitle, selectedThumbnail, selectedPrice } = this.state;
    localStorage.setItem('title', selectedTitle);
    localStorage.setItem('thumbnail', selectedThumbnail);
    localStorage.setItem('price', selectedPrice);
  }

  render() {
    const { selectedTitle, selectedThumbnail, selectedPrice } = this.state;

    return (
      <div>
        <ShoppingCartLink />
        <h1 data-testid="product-detail-name">{selectedTitle}</h1>
        <img src={ selectedThumbnail } alt="" />
        <h2>{selectedPrice}</h2>
        <button
          type="button"
          onClick={ this.toLocalStorage }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}
ProductDetail.propTypes = PropTypes.shape({
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}).isRequired;
export default ProductDetail;
