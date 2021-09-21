import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/ProductDetail.css';

const cartProducts = [];

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.location.state,
      productQty: 0,
    // https://cursos.alura.com.br/forum/topico-this-props-location-query-em-novas-versoes-48309
    };
  }

  componentDidMount() {
    JSON.parse(localStorage.getItem('cart-products'));
  }

  componentDidUpdate() {
    this.savetoLocalStorage();
  }

  savetoLocalStorage = () => {
    const { productQty, product } = this.state;
    const { title, thumbnail, price } = product;
    const savedProduct = { title, thumbnail, price, productQty };
    cartProducts.push(savedProduct);
    localStorage.setItem('cart-products', JSON.stringify(cartProducts));
  };

  addToCartBtn = () => {
    const { product } = this.state;
    const { productQty } = product;
    return (
      <div>
        <button
          className="add-cart-btn"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addToCartfunc }
          type="button"
        >
          Adicionar ao Carrinho
        </button>
        <p>{`Qtd: ${productQty}`}</p>
      </div>
    );
  };

   addToCartfunc = () => {
     this.setState((prev) => ({ productQty: prev.productQty + 1 }));
   };

   render() {
     const {
       product: { title, thumbnail, price },
     } = this.state;

     return (
       <>
         <Link data-testid="shopping-cart-button" to="/shopping-cart">
           <img
             alt="shopping-cart"
             src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
           />
         </Link>
         <div
           className="product-detail"
           data-testid="product-detail-name"
         >
           <h3>{title}</h3>
           <img alt={ title } className="product-thumbnail" src={ thumbnail } />
           <p>{`R$${price.toFixed(2)}`}</p>
           {this.addToCartBtn()}
         </div>
       </>
     );
   }
}

ProductDetail.propTypes = {
  location: PropTypes.object,
}.isRequired;
