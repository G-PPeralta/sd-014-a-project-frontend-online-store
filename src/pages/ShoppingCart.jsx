import React, { Component } from 'react';
import CartItem from '../components/CartItem';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emptyCart: 'Seu carrinho está vazio', // mensagem mostrada quando carrinho está vazio
    };
    this.removeItem = this.removeItem.bind(this);
  }

  getAllStorage = () => {
    const values = [];
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      values.push(localStorage.getItem(key));
    });
    return values;
  }

  removeItem({ target }) {
    const itemToRemoveId = target.parentElement.id;
    const itemsOnStorage = JSON.parse(localStorage.getItem('itemID'));
    const itemToRemoveIndex = itemsOnStorage.indexOf(itemToRemoveId);
    itemsOnStorage.splice(itemToRemoveIndex, 1);
    localStorage.setItem('itemID', JSON.stringify(itemsOnStorage));
    this.cartList();
  }

  render() {
    const { emptyCart } = this.state;
    const infos = this.getAllStorage();
    console.log(infos);
    if (infos.length === 0) {
      return (
        <p>{ emptyCart }</p>
      );
    }
    return (
      <main>
        <section>
          { infos.map((product) => {
            console.log(product);
            return (
              <CartItem
                key={ product.title }
                removeItem={ this.removeItem }
                thumbnail={ product.thumbnail }
                title={ product.title }
                price={ product.price }
              />
            );
          })}
        </section>
      </main>
    );
  }
}

export default ShoppingCart; // Pagina destinada ao carrinho de compras.
