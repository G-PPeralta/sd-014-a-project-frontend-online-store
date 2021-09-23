import React from 'react';
import PropTypes from 'prop-types';
import FormReview from '../components/Reviews/FormReview';
import CartButton from '../components/CartButton';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      thumbnail: '',
      title: '',
    };
  }

  componentDidMount() {
    this.setaStateProduto();
  }

  setaStateProduto = () => {
    const { match: { params: { id } } } = this.props;

    const produtos = JSON.parse(localStorage.getItem('produtos'));

    const findProduto = produtos.find((produto) => produto.id === id);

    const { price, thumbnail, title } = findProduto;

    this.setState({ price, thumbnail, title });
  }

  render() {
    const { price, thumbnail, title } = this.state;
    const { addCart } = this.props;
    return (
      <div>
        <h3 data-testid="product-detail-name">
          {`Produto${title} - R$ ${price}`}
        </h3>
        <img
          src={ thumbnail }
          alt="thumbnail"
        />
        <FormReview />
        <button
          type="submit"
          data-testid="product-detail-add-to-cart"
          onClick={ (event) => addCart(event, title, price) }
        >
          adicionar ao carrinho
        </button>
        <CartButton />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
};
