import React from 'react';
import PropTypes from 'prop-types';

class CartCard extends React.Component {
  constructor() {
    super();
    this.state = {
      qtd: 1,
    };
    this.atualizaQuantidadeA = this.atualizaQuantidadeA.bind(this);
    this.atualizaQuantidadeB = this.atualizaQuantidadeB.bind(this);
  }

  atualizaQuantidadeA() {
    const { qtd } = this.state;
    this.setState({ qtd: qtd + 1 });
  }

  atualizaQuantidadeB() {
    const { qtd } = this.state;
    this.setState({ qtd: qtd - 1 });
  }

  render() {
    const { qtd } = this.state;
    const { product } = this.props;
    return (
      <section>
        <img src={ product.thumbnail } alt={ product.id } />
        <h1 data-testid="shopping-cart-product-name">{ product.title}</h1>
        <p data-testid="shopping-cart-product-quantity">
          { `Quantidade: ${qtd}` }
        </p>
        <div className="flex-quantidade">
          <button
            type="button"
            onClick={ this.atualizaQuantidadeB }
            data-testid="product-decrease-quantity"
            disabled={ qtd < 2 }
          >
            -
          </button>
          <p>
            R$
            {product.price}
          </p>
          <button
            type="button"
            onClick={ this.atualizaQuantidadeA }
            data-testid="product-increase-quantity"
            disabled={ product.available_quantity === qtd }
          >
            +
          </button>
        </div>
      </section>
    );
  }
}

CartCard.propTypes = {
  product: PropTypes.objectOf(String),
};

CartCard.defaultProps = {
  product: undefined,
};

export default CartCard;
