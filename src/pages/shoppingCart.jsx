import React from 'react';
import CartProduct from '../components/CartProduct';

class shoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      produtos: [],
      contadores: {},
    };
  }

  componentDidMount() {
    this.loadFromCart();
  }

  loadFromCart = () => {
    const { produtos } = this.state;
    this.setState({
      produtos: JSON.parse(localStorage.getItem('cartItem')),
    });
    console.log(produtos);
  }

  render() {
    const { produtos, contadores } = this.state;
    return (
      <div>
        { (!produtos)
          ? <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
          : produtos.map((produto) => (
            <>
              <h2 data-testid="shopping-cart-product-name" key={ produto.title }>
                {produto.title}
              </h2>
              <CartProduct
                data-testid="shopping-cart-product-name"
                key={ produto.id }
                produto={ produto }
                contador={ contadores[`${produto.id}`] }
              />
            </>
          )) }
      </div>
    );
  }
}

export default shoppingCart;
