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
      textarea: 'Deixe seu comentário',
      emailInput: 'Digite seu email',
    };
    this.handleState = this.handleState.bind(this);
    this.toLocalStorage = this.toLocalStorage.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  toLocalStorage() {
    const { selectedTitle, selectedThumbnail, selectedPrice } = this.state;
    localStorage.setItem('title', selectedTitle);
    localStorage.setItem('thumbnail', selectedThumbnail);
    localStorage.setItem('price', selectedPrice);
  }

  render() {
    const {
      selectedTitle,
      selectedThumbnail,
      selectedPrice,
      textarea,
      emailInput } = this.state;

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
        <br />
        <input
          type="text"
          name="emailInput"
          value={ emailInput }
          onChange={ this.handleChange }
        />
        <br />
        <textarea
          name="textarea"
          cols="30"
          rows="10"
          value={ textarea }
          onChange={ this.handleChange }
          data-testid="product-detail-evaluation"
        />
        <br />
        <button type="button">Avaliar</button>
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
