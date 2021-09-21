import React from 'react';
import ItemCart from '../components/ItemCart';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      arrayProduct: [
        {
          thumbnail: 'http://http2.mlstatic.com/D_885137-MLB41285473636_032020-O.jpg',
          title: 'Body Infantil Menino Kit Hering Kids Original + Nota Fiscal',
          price: 28.9,
          quantity: 1,
          id: 222,
        },
        {
          thumbnail: 'http://http2.mlstatic.com/D_885137-MLB41285473636_032020-O.jpg',
          title: 'Body Infantil Menino Kit Hering Kids Original + Nota Fiscal',
          price: 28.9,
          quantity: 1,
          id: 221,
        },
        {
          thumbnail: 'http://http2.mlstatic.com/D_885137-MLB41285473636_032020-O.jpg',
          title: 'Body Infantil Menino Kit Hering Kids Original + Nota Fiscal',
          price: 28.9,
          quantity: 1,
          id: 224,
        },
      ],
    };
  }
  // quantityChanger = (buttonName, id) => {
  //   const 
  //   if(buttonName === "acrescentar") {

  //   }
  // }
  render() {
    const { arrayProduct } = this.state;
    return (
      <div>
        {arrayProduct
          .map((product) => (<ItemCart
            key={ product.id }
            product={ product }
          />))}
        <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
      </div>
    );
  }
}

export default ShoppingCart;
