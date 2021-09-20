import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: [],
    };
    this.recebeInfo = this.recebeInfo.bind(this);
  }

  // VERIFICAR QUANTOS ITENS TEM DE CADA PRODUTO
  // RETORNAR UM NOVO ARRAY COM OS ITENS, COM A QUANTIDADE DE CADA
  // FAZER UM MAP DO CARRINHO
  // APÓS O CARRINHO PRONTO, AO EXCLUIR UM ITEM, EDITAR O ARRAY E DEVOLVER PARA O FILHO O NOVO XABLAU
  componentDidMount() {
    this.recebeInfo();
  }

  recebeInfo() {
    const cartListLocal = localStorage.getItem('cartList');
    const cartList = JSON.parse(cartListLocal);
    console.log(cartList);
    this.setState({
      cartList,
    });
    // const arrayzao = [];
    // if (xablau !== undefined) {
    //   const newList = xablau.map((prod) => {
    //     const idProd = prod.prodId;
    //     const arrProd = xablau.filter((produ) => produ.prodId === idProd);
    //     const cartItemDetail = {
    //       quantidade: arrProd.length,
    //       id: arrProd[0].prodId,
    //       price: arrProd[0].prodPrice,
    //       name: arrProd[0].name,
    //     };
    //     if (!arrayzao.some((produ) => produ.id === idProd)) {
    //       arrayzao.push(cartItemDetail);
    //     }
    //     return (arrayzao);
    //   });
    //   this.setState = {
    //     newArr: arrayzao,
    //   };
    //   console.log(newList);
    // }
  }

  render() {
    // const { newArr } = this.state;
    // const { xablau } = this.props;
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
      console.log(newList);
    }

    return (
      <div className="cart">
        {arrayzao.length > 0
          ? (
            <div>
              {arrayzao.map((prod) => (
                <div key={ prod.id }>
                  <p data-testid="shopping-cart-product-quantity">{prod.quantidade}</p>
                  <p>{prod.id}</p>
                  <p>{prod.price}</p>
                  <p data-testid="shopping-cart-product-name">{prod.name}</p>
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
