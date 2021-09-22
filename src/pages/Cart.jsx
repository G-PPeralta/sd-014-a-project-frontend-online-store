import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const numberFormat = (value) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(value);

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: [],
    };
    this.addBTN = this.addBTN.bind(this);
    this.subBTN = this.subBTN.bind(this);
    this.recebeInfo = this.recebeInfo.bind(this);
  }

  componentDidMount() {
    this.recebeInfo();
  }

  async recebeInfo() {
    const cartListLocal = localStorage.getItem('cartList');
    const cartList = JSON.parse(cartListLocal);
    console.log('O ABAIXO EH CART LIST MLKADA!');
    console.log(cartList);
    await this.setState({
      cartList,
    });
  }

  async addBTN(event) {
    const addPrd = {
      prodId: event.target.className,
      name: event.target.name,
      prodPrice: event.target.value,
    };
    if (!JSON.parse(localStorage.getItem('cartList'))) {
      localStorage.setItem('cartList', JSON.stringify([]));
    }
    const localProd = JSON.parse(localStorage.getItem('cartList'));
    localStorage.setItem('cartList', JSON.stringify([...localProd, addPrd]));
    await this.setState({
      cartList: [...localProd, addPrd],
    });
  }

  async subBTN(event) {
    const compareID = event.target.className;
    const { cartList } = this.state;
    const getCartList = cartList;
    const toBeDecreasedObjIndex = cartList.lastIndexOf((ele) => ele.prodId === compareID);
    getCartList.splice(toBeDecreasedObjIndex, 1);
    localStorage.setItem('cartList', JSON.stringify(getCartList));
    this.setState({
      cartList: getCartList,
    });
  }

  render() {
    const { cartList } = this.state;
    const arrayzao = [];
    if (cartList) {
      const newList = cartList.map((prod) => {
        const idProd = prod.prodId;
        const arrProd = cartList.filter((produ) => produ.prodId === idProd);
        const cartItemDetail = {
          quantidade: arrProd.length,
          id: arrProd[0].prodId,
          price: arrProd[0].prodPrice,
          name: arrProd[0].name,
          availableQuantity: arrProd[0].availableQuantity,
        };
        if (!arrayzao.some((produ) => produ.id === idProd)) {
          arrayzao.push(cartItemDetail);
        }
        return (arrayzao);
      });
      console.log('LINHA 83 DE CART.JSX');
      console.log(newList);
    }

    return (
      <>
        <Header />
        <div className="cart">
          <h2 className="cart-title-h">Meu Carrinho de Compras da Trybezon</h2>
          {localStorage.getItem('cartList') !== null
            ? (
              <div>
                {arrayzao.map((prod) => (
                  <div
                    key={ prod.id }
                    className="prod-cart-div"
                  >
                    <p
                      data-testid="shopping-cart-product-name"
                      className="shopping-cart-product-name"
                    >
                      {prod.name}
                    </p>
                    <p className="cart-prod-price">
                      { numberFormat(prod.price)}
                    </p>
                    <span
                      className="shopping-cart-product-qtd-text"
                    >
                      Quantidade escolhida:
                    </span>
                    <button
                      type="button"
                      data-testid="product-increase-quantity"
                      name={ prod.name }
                      value={ prod.price }
                      className={ prod.id }
                      disabled={ prod.quantidade >= prod.availableQuantity }
                      onClick={ this.addBTN }
                    >
                      +
                    </button>
                    <span
                      data-testid="shopping-cart-product-quantity"
                      className="shopping-cart-product-quantity"
                    >
                      {prod.quantidade}
                    </span>
                    <button
                      type="button"
                      data-testid="product-decrease-quantity"
                      name={ prod.name }
                      value={ prod.price }
                      className={ prod.id }
                      onClick={ this.subBTN }
                    >
                      -
                    </button>
                  </div>
                ))}
              </div>)
            : (
              <div className="cart-empty-khabane">
                <p
                  className="empty-cart-message"
                  data-testid="shopping-cart-empty-message"
                >
                  Seu carrinho está vazio
                </p>
                <img
                  className="khabane"
                  src="https://c.tenor.com/E4e4GDUfYEcAAAAd/hello.gif"
                  alt=""
                />
              </div>
            )}
        </div>
        <Footer />
      </>
    );
  }
}

export default Cart;
