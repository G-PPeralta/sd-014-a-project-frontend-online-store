import React, { Component } from 'react';

class AddToCart extends Component {
  constructor (){
    super();
    this.state ={
       cartItems:[],
    }
  }

  // saveLocalStorage= (item) =>{
  //  localStorage.setItem('cart',JSON.stringify(item));
  // }

  handleClick = (event) => {
    const { cartItems } = this.state;
    const cart= cartItems;
    console.log(cart);
    // this.setState(cartItems:([...cart ,event.target.value]));
  }

  render() {
    const { itemTitle, itemPrice } = this.props;
    const {cartItems}= this.state;
    return (
      <div>
        <button
          type="button"
          value={ itemTitle }
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default AddToCart;
