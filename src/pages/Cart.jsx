import React, { Component } from 'react';
// import PropTypes from 'prop-types';

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
        };
        if (!arrayzao.some((produ) => produ.id === idProd)) {
          arrayzao.push(cartItemDetail);
        }
        return (arrayzao);
      });
      // console.log(newList);
    }

    return (
      <div className="cart">
        <h2 className="cart-title-h">Meu Carrinho de Compras</h2>
        {localStorage.getItem('cartList') !== null
          ? (
            <div>
              {arrayzao.map((prod) => (
                <div
                  key={ prod.id }
                  className="prod-cart-div"
                >
                  <p data-testid="shopping-cart-product-name">{prod.name}</p>
                  <p>{prod.price}</p>
                  <button
                    type="button"
                    data-testid="product-increase-quantity"
                    name={ prod.name }
                    value={ prod.price }
                    className={ prod.id }
                    onClick={ this.addBTN }
                  >
                    +
                  </button>
                  <span data-testid="shopping-cart-product-quantity">
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
            <div>
              <p
                className="empty-cart-message"
                data-testid="shopping-cart-empty-message"
              >
                Seu carrinho está vazio
              </p>
              <p>
                <img
                  className="khabane"
                  src="https://c.tenor.com/E4e4GDUfYEcAAAAd/hello.gif"
                  alt=""
                />
              </p>
            </div>
          )}
      </div>
    );
  }
}

// Cart.propTypes = {
//   cartList: PropTypes.shape().isRequired,
// };

export default Cart;
