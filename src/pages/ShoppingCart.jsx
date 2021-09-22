import React from 'react';
import ItemCart from '../components/ItemCart';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      arrayProduct: [{
        product: {
          thumbnail: 'https://conteudo.imguol.com.br/c/entretenimento/dc/2020/11/17/fiat-argo-10-2021-1605633169362_v2_900x506.jpg.webp',
          title: 'Body Infantil Menino Kit Hering Kids Original + Nota Fiscal',
          price: 28.9,
          quantity: 1,
          id: 221,
        },
        quantity: 1,
      }, {
        product: {
          thumbnail: 'http://http2.mlstatic.com/D_885137-MLB41285473636_032020-O.jpg',
          title: 'Body Infantil Menino Kit Hering Kids Original + Nota Fiscal',
          price: 28.9,
          quantity: 1,
          id: 222,
        },
        quantity: 1,
      },
      {
        product: {
          thumbnail: 'http://http2.mlstatic.com/D_885137-MLB41285473636_032020-O.jpg',
          title: 'Body Infantil Menino Kit Hering Kids Original + Nota Fiscal',
          price: 28.9,
          quantity: 1,
          id: 223,
        },
        quantity: 1,
      },
      ],
    };
  }

  quantityChanger = (buttonName, id) => {
    const { arrayProduct } = this.state;
    const selectedProduct = arrayProduct.filter((product) => product.product.id === id);
    const remaningProducts = arrayProduct.filter((product) => product.product.id !== id);
    if (buttonName === 'incrementar') {
      console.log(selectedProduct);
      selectedProduct[0].product.quantity += 1;
    } else if (buttonName === 'decrementar' && selectedProduct[0].product.quantity > 1) {
      console.log(selectedProduct);
      selectedProduct[0].product.quantity -= 1;
    }
    this.setState({
      arrayProduct: [...remaningProducts, ...selectedProduct]
        .sort((a, b) => a.product.id - b.product.id),
    });
  }

  render() {
    const { arrayProduct } = this.state;
    return (
      <div>
        {arrayProduct
          .map((product) => (<ItemCart
            key={ product.product.id }
            product={ product.product }
            quantityChanger={ this.quantityChanger }
          />))}
        <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
      </div>
    );
  }
}

export default ShoppingCart;
