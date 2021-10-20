import React from 'react';
import PropTypes from 'prop-types';

class ShopCart extends React.Component {
  constructor(props) {
    const storageValue = JSON.parse(localStorage.getItem('cartList'));
    super(props);

    this.state = {
      atualize: storageValue,
    };

    this.goToCheckout = this.goToCheckout.bind(this);
    this.cleanStorage = this.cleanStorage.bind(this);
    this.addItem = this.addItem.bind(this);
    this.remvItem = this.remvItem.bind(this);
    this.emptyRender = this.emptyRender.bind(this);
    this.quantityScore = this.quantityScore.bind(this);
  }

  goToCheckout() {
    const { history } = this.props;
    history.push('/checkout');
  }

  cleanStorage() {
    localStorage.setItem('cartList', JSON.stringify([]));
  }

  addItem(parmCart) {
    const storageValue = JSON.parse(localStorage.getItem('cartList'));
    const find = storageValue.find((product) => product.id === parmCart.id);
    if (find === undefined) {
      const saveList = [...storageValue, { ...parmCart, quantity: 1 }];
      localStorage.setItem('cartList', JSON.stringify(saveList));
    } else {
      const map = storageValue.map((exam) => {
        if (exam.id === parmCart.id) {
          const newProduct = { ...find, quantity: find.quantity + 1 };
          return newProduct;
        }
        return exam;
      });
      localStorage.setItem('cartList', JSON.stringify([...map]));
      this.setState({
        atualize: map,
      });
    }
    console.log(parmCart);
  }

  remvItem(parmCart) {
    const storageValue = JSON.parse(localStorage.getItem('cartList'));
    const find = storageValue.find((product) => product.id === parmCart.id);
    if (find === undefined) {
      const saveList = [...storageValue, { ...parmCart, quantity: 1 }];
      localStorage.setItem('cartList', JSON.stringify(saveList));
    } else {
      const map = storageValue.map((exam) => {
        if (exam.id === parmCart.id) {
          const newProduct = { ...find, quantity: find.quantity - 1 };
          return newProduct;
        }
        return exam;
      });
      localStorage.setItem('cartList', JSON.stringify([...map]));
      this.setState({
        atualize: find.quantity,
      });
    }
    console.log(parmCart);
  }

  remove(parm) {
    const { atualize } = this.state;
    const filterRemv = atualize.filter((examp) => examp.id !== parm.id);
    this.setState({
      atualize: filterRemv,
    });
    localStorage.setItem('cartList', JSON.stringify(filterRemv));
  }

  emptyRender() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
  }

  quantityScore() {
    const { atualize } = this.state;
    const score = atualize.reduce((atual, anterior) => atual + anterior.quantity, 0);
    return score;
  }

  render() {
    const storage = JSON.parse(localStorage.getItem('cartList'));
    return (
      <main>
        {storage.length === 0 ? this.emptyRender() : false}
        <button
          type="button"
          onClick={ this.cleanStorage }
        >
          Limpar carrinho
        </button>
        <ul>
          {storage.map((product) => (
            <li
              key={ product.id }
              data-testid="shopping-cart-product-name"
            >
              { product.title }
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => this.addItem(product) }
                disabled={ product.quantity >= product.avaliable_quantity }
              >
                +
              </button>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => this.remvItem(product) }
              >
                -
              </button>
              <button
                type="button"
                onClick={ () => this.remove(product) }
              >
                X
              </button>
            </li>))}
        </ul>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          { this.quantityScore() }
        </p>
        <button
          type="button"
          onClick={ this.goToCheckout }
          data-testid="checkout-products"
        >
          Comprar
        </button>
      </main>
    );
  }
}

ShopCart.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ShopCart;
