import React from 'react';
import EmptyCart from '../components/EmptyCart';
import { getFromCart } from '../services/localStorageServices';
import ShoppingCartItem from '../components/ShoppingCartItem';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = { contentCart: [] };
    this.saveState = this.saveState.bind(this);
    this.renderContentCart = this.renderContentCart.bind(this);
  }

  componentDidMount() {
    const contentCart = getFromCart();
    this.saveState(contentCart);
  }

  saveState(contentCart) {
    this.setState({ contentCart });
  }

  renderContentCart() {
    const { contentCart } = this.state;

    const result = contentCart.reduce((formatedArray, current) => {
      const maybeIndex = formatedArray
        .findIndex(({ content }) => content.id === current.id);
      if (maybeIndex >= 0) {
        formatedArray[maybeIndex].amount += 1;
      } else {
        formatedArray.push({ content: current, amount: 1 });
      }
      return formatedArray;
    }, []);

    return (
      <div>
        {
          result.map(
            (itemInfo) => (
              <ShoppingCartItem
                key={ itemInfo.content.id }
                itemInfo={ itemInfo }
              />),
          )
        }
      </div>
    );
  }

  render() {
    const { contentCart } = this.state;

    return (
      <section>
        {contentCart === [] ? <EmptyCart /> : this.renderContentCart()}
      </section>
    );
  }
}

export default ShoppingCart;
